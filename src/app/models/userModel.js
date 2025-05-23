export default (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // createdAt: DataTypes.DATETIME
        // updatedAt: DataTypes.DATETIME
    });

    return User;
}