const fs=require("fs")
// sync write
// fs.writeFileSync('./test.txt','hello world,how r u')


// async write
// fs.writeFile('./test.txt','helo world asyn',(err)=>{})

    // sync read
    // const result=fs.readFileSync('./contacts.txt','utf-8')
    //    console.log(result)
    
     
    
    // async read
    // fs.readFile('./contacts.txt','utf-8',(err,result)=>{
    //     if(err){
    //         console.log('error',err)
    //     } 
    //     else{
    //         console.log(result)
    //     }
    // })

    // sync append
// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt',`\n ${new Date().getDate().toLocaleString()}  hey there`)

// fs.cpSync('./test.txt','./copy.txt')

//  fs.unlinkSync('./copy.txt')

// console.log(fs.statSync('./test.txt'))

// fs.mkdirSync('mydocs/a/b',{recursive:true})

// console.log('first')
// const result=fs.readFile('./contacts.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log('not right')
//     }
//     else{
//         console.log(result)
//     }
// })

// console.log('second')

// default thread pool size=4
// Max?=8core cpu then max=8

// const os=require('os')
// console.log(os.cpus().length)
// console.log(process.cwd());