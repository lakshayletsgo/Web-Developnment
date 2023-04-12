const https = require('http');
const fs = require('fs');
// const { url } = require('inspector');
const hostname = '127.0.0.1';
const port = 4000;
const home = fs.readFileSync("./site.html");
const Begin = ("/facebook.com");
const server = https.createServer((req,res)=>{
    url=  req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/html");
    if(url=='/'){
        res.end(home);
    }else if(url=='/BeginYourJourney'){
        res.end(Begin);
    }else{
        res.statusCode = 404;
        res.end("<h1>FUCK YOU</h1>")
    }


});
server.listen(port,hostname,()=>{
    console.log(`Server running on the server at http://${hostname}:${port}/`)
});
