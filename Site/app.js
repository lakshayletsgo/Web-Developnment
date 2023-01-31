const express = require("express")
const fs = require('fs')
// const mongoose = require('mongoose')
const path = require('path')
// const { mainModule } = require("process")
// mongoose.set('strictQuery',true)
// main().catch(err=>console.log(err));
// async function main(){
//     await mongoose.connect('mongodb.//127.0.0.1:27017/myselfSite');
// }
const port = 90;
const app = express();


app.use('/static',express.static('static'))
app.use(express.urlencoded());


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params);
})
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})

app.listen(port,(req,res)=>{
    console.log(`App is started at the port ${port} `);
})
