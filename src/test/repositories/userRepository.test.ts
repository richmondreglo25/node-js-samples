import { UserRepository } from '@app/repositories/userRepository';
import db from '@app/models';
import { UserAttributes } from '@app/models/userModel';

function getUserPlain(user: any): UserAttributes {
    return user.get ? user.get({ plain: true }) : user;
}

describe('UserRepository Unit', () => {
    const repo = new UserRepository();

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await db.sequelize.close();
    });

    it('should create a user', async () => {
        const user = await repo.create({ firstname: 'Unit', lastname: 'Test', nickname: 'unit', email: 'unit@example.com', status: true });
        const plainUser = getUserPlain(user);
        expect(plainUser).toBeDefined();
        expect(plainUser.firstname).toBe('Unit');
    });

    it('should find all users', async () => {
        const users = await repo.findAll();
        expect(Array.isArray(users)).toBe(true);
    });

    it('should find user by id', async () => {
        const user = await repo.findById(1);
        expect(user).toBeDefined();
    });

    it('should update a user', async () => {
        await repo.update(1, { firstname: 'Updated' });
        const updatedUser = await repo.findById(1);
        expect(getUserPlain(updatedUser)).toBeDefined();
        expect(getUserPlain(updatedUser).firstname).toBe('Updated');
    });

    it('should delete a user', async () => {
        const affected = await repo.delete(1);
        expect(typeof affected).toBe('number');
    });
});
