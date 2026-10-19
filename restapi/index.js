const express=require('express')

const model=require('./models/user')
const {connectDB}=require('./connection/connection')
const userRouter=require('./routes/routes')
const {logreqres}=require('./middlewares/middlewares')

const app=express()
const PORT=8000

// mongodb
connectDB()

// middleware plugin
app.use(express.urlencoded({extended:false}))
app.use(logreqres('users_100'))

// Routes
app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log('server started')
})