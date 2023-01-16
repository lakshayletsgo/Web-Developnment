const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync("./index.html");
const contacts = fs.readFileSync("./contacts.html");
const AboutUs = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const server = http.createServer((req,res)=>{
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(url=='/'){
    res.end(home);}
    else if(url=='/about'){
        res.end(AboutUs);
    }else if(url=='/contactus'){
        res.end(contacts);
    }else if(url=='/services'){
        res.end(services);
    }else{
        res.statusCode = 404;
        res.end('<h1>Error 404 not found</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server is Running at http://${hostname}:${port}/`);
});