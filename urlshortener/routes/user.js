const express=require('express')
const handleUserSignup=require('../contollers/user')
const router=express.Router()

router.post('/',handleUserSignup)


module.exports=router