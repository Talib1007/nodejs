const express=require('express')
const {handleGenerateNewShortUrl,handlerequest,handleanalytics,handlealllinks}=require("../controllers/user")
const router=express.Router()

// server side rendering
router.get('/test',handlealllinks)

router.post('/',handleGenerateNewShortUrl)
router.get('/:shortId',handlerequest)
router.get('/analytics/:shortId',handleanalytics)


module.exports=router
