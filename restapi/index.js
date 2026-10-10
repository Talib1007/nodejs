const http=require('http') 
const express=require('express')
const users=require("./users_100.json")
const fs =require('fs')
const mongoose=require('mongoose')

const app=express()
const PORT=8000

app.get('/api/users',(req,res)=>{
    // Always add X to custom headers
    res.setHeader("X-myName","Mohd Talib")
    res.send(users)
})

app.get('/api/users/:idNumber',(req,res)=>{
    const id1=(req.params.idNumber)
    const user=users.find((user)=>user.id==id1)
    if(!user){
        return res.status(404).json('invalid id')
    }
    res.json(user)
})

app.use(express.urlencoded({extended:false}))

app.post('/api/users',(req,res)=>{
   const body=req.body
   if(!body || !body.name || !body.age){
  return  res.status(404).json('insufficient')
   }
   users.push({...body,id:users.length})
   fs.writeFile('./users_100.json',JSON.stringify(users),()=>{
    res.status(201).send("status pending")
   })

})

// app.patch('/api/users',(req,res)=>{
//     const body=req.body

// })

app.get('/users',(req,res)=>{
    const name = `<ul>
        ${users.map((user)=>`<li>${user.name}</li>`).join("")}
    </ul>`
    res.send(name)
        })

app.listen(PORT,()=>{
    console.log('server started')
})