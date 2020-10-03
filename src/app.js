const express = require('express');
const path = require('path');


//Intialization
const app = express()
require('./database')

//Settings
app.set('port',process.env.PORT || 4000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Middleware
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/',require('./routes/contact.route'));

//static files:
app.use(express.static(path.join(__dirname,'public')))
module.exports = app;