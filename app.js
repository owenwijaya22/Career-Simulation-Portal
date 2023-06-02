const express = require('express');
const morgan = require('morgan');

const app = express();

if(process.env.NODE_ENV === 'development') {
    console.log('Morgan Initialized')
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

module.exports = app;
