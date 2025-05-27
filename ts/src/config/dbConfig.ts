import "dotenv/config";
import jsonUtils from "../utils/jsonUtils";

const config = process.env.SECRET_DB_CONFIG
    ? (jsonUtils as any).stringToJson(process.env.SECRET_DB_CONFIG, "SECRET_DB_CONFIG")
    : {};

export const test = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};

export const development = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};

export const production = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: config.pool
};