const http = require('http');
const fs = require('fs');

const filecontent = fs.readFileSync('html52.html');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent);
})
console.log("hello")

server.listen(8000, '127.0.0.1'  ,()=>{
    console.log("Listening on port 8000")
})