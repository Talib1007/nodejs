const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    originalId:{
         type:String,
        required:true
    },
   visitedHistory: [
    {
        timestamp: {
            type: Number
        }
    }
]
},{timestamps:true})

const URL=mongoose.model('url',userSchema)

module.exports=URL