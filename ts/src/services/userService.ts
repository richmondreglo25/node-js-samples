import { userRepository } from '../repositories/userRepository';
import { UserAttributes } from '../models/userModel';

export const userService = {
    async getUsers(fetchDeleted: boolean) {
        const where: any = {};

        if (!fetchDeleted) {
            where.status = true;
        }

        return userRepository.findAll({ where });
    },

    async getUserById(id: number) {
        return userRepository.findById(id);
    },

    async addUser(data: UserAttributes) {
        return userRepository.create({
            ...data,
            status: true,
        });
    },

    async updateUser(id: number, data: Partial<UserAttributes>) {
        return userRepository.update(id, {
            ...data
        });
    },

    async deleteUser(id: number) {
        return userRepository.update(id, { status: false });
    }
};
