console.log("hello world") //node 1.hello in terminal
const math=require("")
// nodejs do not include dom related work like alert,window,etc it does not work 
// ui related work
// const math=require("./2.math")  // u can also write {add,sub} in place of math
// you can also destructure it
// const {add,sub}=require("./2.math")
const math=require("./2.math")
console.log(math.add(5,6)+" and "+math.sub(6,4) )
// console.log(math )

