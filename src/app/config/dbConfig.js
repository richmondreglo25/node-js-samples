import jsonUtils from "../utils/jsonUtils.js";
const config = jsonUtils.stringToJson(process.env.SECRET_DB_CONFIG, "SECRET_DB_CONFIG");

export default {
    test: {
        username: config.username,
        password: config.password,
        database: config.database,
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        pool: config.pool
    },
    development: {
        username: config.username,
        password: config.password,
        database: config.database,
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        pool: config.pool
    },
    production: {
        username: config.username,
        password: config.password,
        database: config.database,
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        pool: config.pool
    }
}