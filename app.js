const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {router} = require('./routes/api/v1/contacts');

var app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/contacts', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.get('/tiktok', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/reddit', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/reddit.html'));
});

module.exports = app;