const http=require('http') 
const express=require('express')
const users=require("./users_100.json")
const fs =require('fs')
const mongoose=require('mongoose')  //to connect nodejs to mongodb

const app=express()
const PORT=8000

//mongo connection
require("dotenv").config();
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

connectDB();

// Schema
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Jobtitle:{
        type:String
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String
    }
},{timestamps:true})

const User=mongoose.model("user",userSchema)

app.get('/api/users',async(req,res)=>{
    // Always add X to custom headers
    // res.setHeader("X-myName","Mohd Talib")
    // res.send(users)
    const allDbUsers=await User.find({})
   res.send(allDbUsers)
})

app.route('/api/users/:idNumber').get(async(req,res)=>{
    // const id1=(req.params.idNumber)
    const id=(req.params.idNumber)
    const user=await User.findById(id)
    if(!user){
        return res.status(404).json('invalid id')
    }
    res.json(user)
}).patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.idNumber,{firstName:"mr"})
    res.send("Success")
}).delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.idNumber)
    res.send("success")
})

app.use(express.urlencoded({extended:false}))

app.post('/api/users',async(req,res)=>{
   const body=req.body
   if(!body || !body.first_name|| !body.age||!body.last_name||!body.jobtitle||!body.gender||!body.email){
  return  res.status(404).json('insufficient')
   }
//    users.push({...body,id:users.length})
//    fs.writeFile('./users_100.json',JSON.stringify(users),()=>{
//     res.status(201).send("message success")
// })
 const result=  await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    Email:body.email,
    age:body.age,
    gender:body.gender,
    jobtitle:body.jobtitle
   })
   console.log(result)
 res.status(201).send("message success")
})

// app.patch('/api/users',(req,res)=>{
//     const body=req.body

// })

app.get('/users',async(req,res)=>{
    // const name = `<ul>
    //     ${users.map((user)=>`<li>${user.name}</li>`).join("")}
    // </ul>`
    // res.send(name)
    // below code is after connecting mongodb to get data from mongodb
    const allDbUser= await User.find({});
    const name = `<ul>
       ${allDbUser.map((user)=>`<li>${user.firstName} ${user.lastName}-${user.Email}</li>`).join("")}
     </ul>`
    res.send(name)
        })

app.listen(PORT,()=>{
    console.log('server started')
})