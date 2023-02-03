const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("1st page !");
});
app.get('/about',(req,res)=>{
    res.status(200).send("Aboout page "+ res.statusCode);
});
app.get('/contact',(req,res)=>{res.send("<h1>Contact<h1>")});
app.listen('3000',()=>{console.log("Port 3000")});