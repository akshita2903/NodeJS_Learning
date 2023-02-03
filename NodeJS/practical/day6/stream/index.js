const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{

    //1-Normal Way of Reading file without streaming
// fs.readFile('streamData.txt','utf-8',(err,data)=>{
//     if(err) return console.error(err);
//     res.end(data);
// });

//2. Readable stream se read
const read_stream=fs.createReadStream('streamData.txt');
// read_stream.on('data',(chunkData)=>{  //event for reading data(in straem manner) from file is 'data'
//     res.end(chunkData);
// });  
// read_stream.on('end',()=>{
//     res.end();
// })
//3-way by single line
// read_stream.pipe('real time me jaha data write(dikhana) hai .In this case hmko res me dikhana hai')
read_stream.pipe(res);
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("Server started");
});