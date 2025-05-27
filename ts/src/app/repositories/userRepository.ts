import db from '../models';
import { BaseRepository } from './baseRepository';
import { UserAttributes } from '../models/userModel';
import { Model } from 'sequelize';

export class UserRepository extends BaseRepository<Model<UserAttributes>> {
    constructor() {
        super(db.users);
    }
}

export const userRepository = new UserRepository();
