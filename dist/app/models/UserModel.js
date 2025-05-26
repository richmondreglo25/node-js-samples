"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        nickname: DataTypes.STRING,
        email: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    });
    return User;
};
