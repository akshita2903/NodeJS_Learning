const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hellow");
});
//SEND ARRAY OF OBJECT VIA API TO FRONT END
app.get('/getOb',(req,res)=>{
    res.send([{
        id:1,
    name:"Ak"
    },{
        id:2,
        name:"Jk"
    }])
})
app.listen(3000,()=>{console.log("server started")});