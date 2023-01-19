const express = require("express");//This is importing library 
const path = require('path');
const fs = require('fs');
const app  = express();//Express ki app banai
const port = 90;//This is the port jispe voh chalu hoga


//This is for serving files to the static link
app.use('/static',express.static('static'));
app.use(express.urlencoded());


// Pug Stuff
app.set('view engine','pug');// This is for making template for pug 
app.set('views',path.join(__dirname,'views'));// Set the view directory


const con = "This is content example"
// Our pug demo endpoint
app.get('/',(req,res)=>{
    const paramss = {'title':'This is lakshay',"content":con};
    res.status(200).render('index.pug',paramss)
})

app.post('/',(req,res)=>{
    Name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    more = req.body.More;
    let outputofclient = `Name of the client is ${Name}. Age of the client is ${age}. Gender of the client is ${gender}. More information of the client is ${more}.`
    fs.writeFileSync('output.txt',outputofclient);
    const paramss = {'title':'Form Submitted Successfully!!'};
    res.status(200).render('index.pug',paramss)
})



// ALL THE ENDPOINTS
// app.get("/",(req,res)=>{
//     res.send("This is homepage of my first Express App")
// });
app.get("/about",(req,res)=>{
    res.status(200).send("This is about section of my first Express App")
});
app.post("/about",(req,res)=>{
    res.send("This is about section in post request of my first Express App")
});
app.post("/error",(req,res)=>{
    res.status(404).send("Error not found ")
});
app.listen(port,()=>{
    console.log(`The app is running on the port ${port}`);
})