const http=require('http')
const fs =require('fs')
const url=require("url")
// const myServer =http.createServer((req,res)=>{
//     console.log(req.headers)
// res.end("hello from server again")
 // fs.appendFile('log.txt',`${Date.now()} new req received\n`,(err,data)=>{
//     res.end("hello from server")
// })
//   if(req.url==="/favicon.ico"){
//      return   res.end();
//      }
//      const myUrl=url.parse(req.url,true)
//      console.log(myUrl)
// fs.appendFile('log.txt',`${Date.now()} ${req.url} new req received \n`,(err,data)=>{
   
//       switch(myUrl.pathname){
//         case '/':res.end("homepage")
//         break
//         case '/about' : const name=myUrl.query.myName
//         res.end(`i am ${name}`)
//         break
//         case '/search':const searchResult=myUrl.query.searchQuery;
//         res.end(`here are ur search results for ${searchResult}`)
//         break
//         default: res.end("404 not found")
//         break
//     }
// })
    
// });
// myServer.listen(8000,()=>{
//     console.log("server started")
// })
