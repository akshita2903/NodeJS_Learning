const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync("api.json",'utf-8');
    const obj_data=JSON.parse(data);
    if(req.url === '/')
    {
        res.end("helloww");
    }
    else if(req.url === '/api')
    {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(obj_data[3].name);
    }
    else{
        res.end("Happy ");
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("Server started");
})