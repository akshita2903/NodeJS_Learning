const http=require("http");
const server=http.createServer((req,res) => {
    // console.log(req.url)
    if(req.url === '/'){
        res.end("Hello simple");
    }
    else if(req.url === "/about")
    {
        res.end("Learning to handle request response ");
    }
    else if (req.url == "contact")
    {
        res.end("Contact us");
    }
    else{
        res.writeHead(404,"Error");
        res.end("Not found "+res.statusCode);
    }

});

//request kya mil rha usko suno  
//port number,hostname
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000");
});