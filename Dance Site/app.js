const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ContactDance');
    // console.log("sample");
  }
const port = 90;
const app = express();

var contactSchema = new mongoose.Schema({
    name:String,
    age:String,
    phonenumber:String,
    email:String,
    desc:String,
    
});
var Contact = mongoose.model('Contact',contactSchema)

app.use('/static',express.static('static'));
app.use(express.urlencoded())


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);
})
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Details Submitted successfully"); 
    }).catch(()=>{
        res.status(400).send("Item was not saved");
    })
     
    // res.status(200).render('contact.pug',params);
})

app.listen(port,(req,res)=>{
    console.log(`App is started at the port ${port} `);
})