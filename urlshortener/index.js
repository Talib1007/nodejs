const express=require('express')
// after implementing ejs
const path=require('path')

// for staticroute
const staticroute=require('./routes/staticrouter/staticroute')

const urlRoute=require('./routes/user') 
const {connectDB}=require('./connection/connect')   
const app=express()
const PORT=5001

// middleware to read form data
app.use(express.urlencoded({extended:false}))

// Middleware to read JSON request bodies
app.use(express.json());

// implementing ejs
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

// mongodb
connectDB()

app.use('/url',urlRoute)

// for staticroute
app.use('/',staticroute)


app.listen(PORT,()=>{
    console.log("server started")
})
