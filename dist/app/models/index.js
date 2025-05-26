"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const userModel_1 = __importDefault(require("./userModel"));
const dbConfig = __importStar(require("../config/dbConfig"));
const stringUtils_1 = __importDefault(require("../utils/stringUtils"));
var _env;
const env = (_env = process.env.NODE_ENV) && !stringUtils_1.default.isBlank(_env) ? _env : "development";
const config = dbConfig[env];
const params = {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};
const sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, params);
sequelize.authenticate()
    .catch(() => {
    console.log(`Unable to connect to Database.`);
});
const db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    users: (0, userModel_1.default)(sequelize, sequelize_1.DataTypes)
};
exports.default = db;
