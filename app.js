const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {router} = require('./routes/api/v1/contacts');

var app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/contacts', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.get('/question1', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/question1.html'));
});

app.get('/question2', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/question2.html'));
});

app.get('/question3', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/question3.html'));
});

module.exports = app;