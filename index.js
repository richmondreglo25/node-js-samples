// ES module. ECMAScript Modules (NEW)
import express from 'express';
import main, { getUserAlias } from './main.js';
import constants from './constants.js';

// require statements. (OLD)
// const express = require('express');
// const main = require('./main');
// Import specific methods from module.
// const { getUserAlias } = main; // require('./main');

// Constants.
const PORT = process.env.PORT;
const app = express();

// Middleware
const logger = (req, res, next) => {
    console.log(constants.__filename + " " + constants.__dirname);
    console.log(`${req.method} ${req.url}`);
    next();
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/getUser', (req, res) => {
    logger(req, res, () => {
         // Query parameter
        const id = req.query.id;
        // res.send(main.getUser().firstName + ' ' + main.getUser2().lastName + " " + getUserAlias() + " " + id);
        // Embed variables and methods in a string.
        res.send(`${main.getUser().firstName} ${main.getUser2().lastName} ${getUserAlias()} ${id}`);
    });
});

app.get('/getUser/:id', (req, res) => {
    logger(req, res, () => {
        // Path parameter.
        const id = req.params.id;
        res.send(main.getUser().firstName + ' ' + main.getUser2().lastName + " " + getUserAlias() + " " + id);
    });
});

app.listen(PORT, (req, res) => {
    // Up and running!
});

// HTTP module sample.

/*
var http = require('http');
var main = require('./main');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(main.getUser().firstName + ' ' + main.getUser2().lastName);
})
.listen(3000);
*/