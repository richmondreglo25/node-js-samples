"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.development = exports.test = void 0;
require("dotenv/config");
const jsonUtils_1 = __importDefault(require("../utils/jsonUtils"));
const config = process.env.SECRET_DB_CONFIG
    ? jsonUtils_1.default.stringToJson(process.env.SECRET_DB_CONFIG, "SECRET_DB_CONFIG")
    : {};
exports.test = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};
exports.development = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};
exports.production = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};
