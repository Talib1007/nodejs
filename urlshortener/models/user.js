const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:string
    },
    email:{
        required:true,
        type:string,
        unique:true
    },
    password:{
        required:true,
        type:string
    }
},{timestamps:true}
)

const USER=mongoose.model('user',userschema)

moduke.exports=USER