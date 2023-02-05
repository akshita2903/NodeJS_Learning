const ex=require('express');
const app=ex();
const path=require('path');
console.log(__dirname)
const staic_path=path.join(__dirname,'../public');
console.log(staic_path);
 app.use(ex.static(staic_path))
app.get('/',(req,res)=>{
    res.send("hello");
});
app.listen(8000,()=>{console.log("hello")});