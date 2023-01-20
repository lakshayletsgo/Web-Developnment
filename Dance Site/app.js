const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 90;
const app = express();

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

app.listen(port,(req,res)=>{
    console.log(`App is started at the port ${port} `);
})