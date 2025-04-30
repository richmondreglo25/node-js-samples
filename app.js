// npm run dev???
// TODO hot deploy, dynamic load upon change of code. How???

// es module. (NEW)
import express from 'express';
import main, { getUserAlias } from './main.js';

// require statements. (OLD)
// const express = require('express');
// const main = require('./main');
// Import specific methods from module.
// const { getUserAlias } = main; // require('./main');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/getUser', (req, res) => {
    // Query parameter
    const id = req.query.id;
    // res.send(main.getUser().firstName + ' ' + main.getUser2().lastName + " " + getUserAlias() + " " + id);
    // Embed variables and methods in a string.
    res.send(`${main.getUser().firstName} ${main.getUser2().lastName} ${getUserAlias()} ${id}`);
});

app.get('/getUser/:id', (req, res) => {
    // Path parameter.
    const id = req.params.id;
    res.send(main.getUser().firstName + ' ' + main.getUser2().lastName + " " + getUserAlias() + " " + id);
});

app.listen(3000, (req, res) => {
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