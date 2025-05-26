import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './userModel';
import * as dbConfig from '../config/dbConfig';
import stringUtils from '../utils/stringUtils';

var _env;
const env = (_env = process.env.NODE_ENV) && !stringUtils.isBlank(_env) ? _env : "development";
const config = (dbConfig as any)[env];
const params = {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    params
);

sequelize.authenticate()
    .catch(() => {
        console.log(`Unable to connect to Database.`);
    });

const db = {
    Sequelize,
    sequelize,
    users: UserModel(sequelize, DataTypes)
};

export default db;