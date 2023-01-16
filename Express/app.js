const express = require("express");//This is importing library 
const app  = express();
const port = 90;//This is the port jispe voh chalu hoga
app.get("/",(req,res)=>{
    res.send("This is homepage of my first Express App")

});
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