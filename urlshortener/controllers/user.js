const USER=require('../models/user')

async function handleUserSignup(req,res){
    const {name,email,password}=req.body
    await USER.create({
        name,
        email,
        password
    })
    res.render('home')
}

module.exports={handleUserSignup}