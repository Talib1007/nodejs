const express=require('express')
// after implementing ejs
const path=require('path')

// for staticroute
const staticroute=require('./routes/staticroute')

// for implementing user signup 
const userRoute=require('./routes/user')

// for cookie parser
const coookieparser=require('cookie-parser')

// for auth middleware
const {}=require('../middleware/auth')

const urlRoute=require('./routes/url') 
const {connectDB}=require('./connection/connect')   
const app=express()
const PORT=process.env.PORT || 8084

// middleware to read form data
app.use(express.urlencoded({extended:false}))

// cookie parser
app.use(cookieParser())

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

// for user signup
app.use('/user',userRoute)



app.listen(PORT,()=>{
    console.log("server started")
})
