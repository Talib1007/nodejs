const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
},{timestamps:true}
)

const USER=mongoose.model('user',userSchema)

module.exports=USER