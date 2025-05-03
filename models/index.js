import {Sequelize, DataTypes} from 'sequelize';
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
.then(() => {
    // console.log('Connected to Database!');
})
.catch((err) => {
    let _config = config;
    _config.password = "****";
    console.log(`Unable to connect to Database using these configs. ${_config}`);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = UserModel(sequelize ,DataTypes);

db.sequelize.sync({
    force: false
})
.then(() => {
    // console.log(`Resycn done.`)
});

export default db;