//running hello on server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//calling createServer method of http to create new http server
//req is request made by user(frontend part to backend part for returning something)

// Whenever a new request is received, the request event is called, providing two objects:
//  a request (an http.IncomingMessage object) and a response (an http.ServerResponse object)
const server = http.createServer((req, res) => {
    //res for sending response(data) to the caller
  res.statusCode = 200; //for  successfull creation status code=200
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});  //server bn gya

server.listen(port || 3000, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
