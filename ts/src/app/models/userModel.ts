import { Sequelize, DataTypes as DT, Model, ModelStatic } from 'sequelize';

export interface UserAttributes {
    id?: number;
    firstname: string;
    lastname: string;
    nickname?: string | null;
    email?: string | null;
    status: boolean;
}

export default (sequelize: Sequelize, DataTypes: typeof DT): ModelStatic<Model<UserAttributes>> => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    });
    return User;
};