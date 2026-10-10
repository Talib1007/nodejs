// const http=require('http')
const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    return res.send('this is a homepage')
})

app.get('/about',(req,res)=>{
    const name=req.query.name
    return res.send(`this is ${name}`)
})

app.listen(8000,()=>{
    console.log('server started')
})

// const myServer=http.createServer(app)

// myServer.listen(8000,()=>{
//     console.log('server started')
// })