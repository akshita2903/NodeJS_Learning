const express=require('express');
const app=express();
const path=require('path');
// const fs=require('fs');
// fs.writeFileSync('./public/index.html','<head><title>T</title></head><body><h1>Hellow</h1></body>');
// console.log(__dirname);

console.log(path.join(__dirname,'./public'))
const staticPath=path.join(__dirname,'./public');
//express.static is a built in middleware
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
res.send("Alee")
});



app.listen(8000,()=>{console.log("Server")});