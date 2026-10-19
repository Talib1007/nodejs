const crypto = require('crypto');


const URL=require('../models/user')

// generate url shortener
async function handleGenerateNewShortUrl(req,res){
    const body=req.body
if(!body.url){
        return res.send('enter valid url')
    }
    
    // 1. Check if this URL already exists
    const existingUrl = await URL.findOne({
        originalId: body.url
    });

    // 2. If it exists, return its existing short ID
    if (existingUrl) {
        return res.render('home',{ id: existingUrl.shortId });
    }
   const shortID = crypto.randomBytes(4).toString('hex');
    await URL.create({
        shortId:shortID,
        originalId:body.url,
        visitedHistory:[]
    })
    // return res.json({id:shortID})
    return res.render('home',{
        id:shortID
    })
}

// redirect to original url
async function handlerequest(req,res){
    const shortId=req.params.shortId
    const entry=  await URL.findOneAndUpdate({
        shortId
    },{$push:{visitedHistory:{timestamp:Date.now()}}})
    res.redirect(entry.originalId)
  
}

// handle analytics
async function handleanalytics(req,res){
     const shortId=req.params.shortId
    const result= await URL.findOne({shortId})
     res.json({totalclicks:result.visitedHistory.length,analytics:result.visitedHistory})
}

// show all url with timestamps
async function handlealllinks(req,res){
    const allUrl=await URL.find({})
    //    res.setHeader('Content-Type', 'text/html');
    res.render('home',{
        urls:allUrl
    })
}

module.exports={
    handleGenerateNewShortUrl,handlerequest,handleanalytics,handlealllinks
}