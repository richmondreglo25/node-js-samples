import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './UserModel.js';
import dbConfig from '../config/dbConfig.js';
import stringUtils from '../utils/stringUtils.js';
var _env;
const env = (_env = process.env.NODE_ENV) !== null && !stringUtils.isBlank(_env) ? _env : "dev";
const config = dbConfig[env];
const params = {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    params
)

sequelize.authenticate()
    .catch((err) => {
        console.log(`Unable to connect to Database`);
    });

const db = {
    Sequelize,
    sequelize,
    users: UserModel(sequelize, DataTypes)
};

// db.sequelize.sync({
//     force: false
// })

export default db;