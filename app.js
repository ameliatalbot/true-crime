const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const contactsRouter = require('./routes/api/v1/contacts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/contacts', contactsRouter);

app.get('/tiktok', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/reddit', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/reddit.html'));
});

module.exports = app;