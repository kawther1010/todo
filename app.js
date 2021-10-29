require('./models/db');

const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const router = require('./router/router');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(8000, () =>{
    console.log('running!');
});

app.use('/', router);