// ES module. ECMAScript Modules (NEW)
import express from 'express';

// require statements. (OLD))
// const express = require('express');

// Routers.
import userRouter from './routers/userRouter.js'

// Configs and utils.
import dbConfig from './config/dbConfig.js';
import stringUtils from './utils/stringUtils.js';

var _env;
const env = (_env = process.env.NODE_ENV) !== null && !stringUtils.isBlank(_env) ? _env : "dev";

// Constants.
const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // Express request body parser.

// Implement routers.
app.use('/api/users', userRouter);

app.listen(PORT, (req, res) => {
    console.log(`DB config: ${env}`);
    
    let _dbConfig = dbConfig[env];
    _dbConfig.password = "****";
    console.log(_dbConfig);

    console.log(`Server is running on port ${PORT}`)
});

// Logger middleware.
// const logger = (req, res, next) => {
//     next();
// }

// JSON middleware.
// const jsonMiddleware = (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// }