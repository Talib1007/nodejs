const express=require('express')
const {allDbUsers,byIdNumber,updateName,deleteData,postData}=require('../controllers/user')

const router=express.Router()

// 1.1
// router.get('/',async(req,res)=>{
//     // Always add X to custom headers
//     // res.setHeader("X-myName","Mohd Talib")
//     // res.send(users)
 
// })

// 1.2
router.get('/',allDbUsers)

2.1
// router.route('/:idNumber').get(async(req,res)=>{
//     // const id1=(req.params.idNumber)
//     const id=(req.params.idNumber)
//     const user=await User.findById(id)
//     if(!user){
//         return res.status(404).json('invalid id')
//     }
//     res.json(user)
// }).patch(async(req,res)=>{
//     await User.findByIdAndUpdate(req.params.idNumber,{firstName:"mr"})
//     res.send("Success")
// }).delete(async(req,res)=>{
//     await User.findByIdAndDelete(req.params.idNumber)
//     res.send("success")
// })

// 2.2
router.route('/:idNumber').get(byIdNumber).patch(updateName).delete(deleteData)

// 3.1
// router.post('/',async(req,res)=>{
//    const body=req.body
//    if(!body || !body.first_name|| !body.age||!body.last_name||!body.jobtitle||!body.gender||!body.email){
//   return  res.status(404).json('insufficient')
//    }
// //    users.push({...body,id:users.length})
// //    fs.writeFile('./users_100.json',JSON.stringify(users),()=>{
// //     res.status(201).send("message success")
// // })
//  const result=  await User.create({
//     firstName:body.first_name,
//     lastName:body.last_name,
//     Email:body.email,
//     age:body.age,
//     gender:body.gender,
//     jobtitle:body.jobtitle
//    })
//    console.log(result)
//  res.status(201).send("message success")
// })

// 3.2
router.post('/',postData)

// you can also write 
// router.('/').get(allDbUsers).post(postData)

// router.get('/users',async(req,res)=>{
//     // const name = `<ul>
//     //     ${users.map((user)=>`<li>${user.name}</li>`).join("")}
//     // </ul>`
//     // res.send(name)
//     // below code is after connecting mongodb to get data from mongodb
//     const allDbUser= await User.find({});
//     const name = `<ul>
//        ${allDbUser.map((user)=>`<li>${user.firstName} ${user.lastName}-${user.Email}</li>`).join("")}
//      </ul>`
//     res.send(name)
//         })

        module.exports=router