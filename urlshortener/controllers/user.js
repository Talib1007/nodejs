const USER=require('../models/user')
const {v4:uuidv4}=require('uuid')
const sessionId=uuidv4()

const {setUser,getUser}=require('../service/auth')

async function handleUserSignup(req,res){
    const {name,email,password}=req.body
    await USER.create({
        name,
        email,
        password
    })
    res.redirect('/')
}
// for login
async function handleUserLogin(req,res){
        const {email,password}=req.body
    const user = await USER.findOne({
        email,
        password
    })
    console.log(user)
    if(!user){
        return res.render("login",{
            error:"invalid email or password"
        })
    }
    // for implementing cookies
    setUser(sessionId,user)
    res.cookie('uid',sessionId)
    return res.redirect("/")
}


module.exports={handleUserSignup,
    handleUserLogin
}