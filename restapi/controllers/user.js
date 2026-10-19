const User=require('../models/user')
// get all name
async function allDbUsers(req,res){
   const allDbUsers=await User.find({})
   res.send(allDbUsers)
}

// get name by id
async function byIdNumber(req,res){
       const id=(req.params.idNumber)
    const user=await User.findById(id)
    if(!user){
        return res.status(404).json('invalid id')
    }
    res.json(user)
}

// update first name
async function updateName(req,res){
      await User.findByIdAndUpdate(req.params.idNumber,{firstName:"mr"})
    res.send("Success")
}

// delete specific data
async function deleteData(req,res){
 await User.findByIdAndDelete(req.params.idNumber)
    res.send("success")
}

// post the data
async function postData(req,res){
       const body=req.body
   if(!body || !body.first_name || !body.age||!body.last_name||!body.jobtitle||!body.gender||!body.email){
  return  res.status(404).json('insufficient')}
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
   }

module.exports={
    allDbUsers,byIdNumber,updateName,deleteData,postData
}