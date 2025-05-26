import { Sequelize, DataTypes as DT, Model, ModelStatic } from 'sequelize';

export interface UserAttributes {
    id?: number;
    firstname: string;
    lastname: string;
    status?: boolean;
}

export default (sequelize: Sequelize, DataTypes: typeof DT): ModelStatic<Model<UserAttributes>> => {
    const User = sequelize.define('User', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    });
    return User;
};