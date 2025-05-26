import { BaseRepository } from '@app/repositories/baseRepository';
import db from '@app/models';
import { UserAttributes } from '@app/models/userModel';

function getUserPlain(user: any): UserAttributes {
    return user.get ? user.get({ plain: true }) : user;
}

describe('BaseRepository Unit', () => {
    const repo = new BaseRepository(db.users);

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await db.sequelize.close();
    });

    it('should create a user', async () => {
        // Ensure the user model has all these fields defined in your schema
        const user = await repo.create({ firstname: 'Base', lastname: 'Repo', nickname: 'base', email: 'base@example.com', status: true });
        const plainUser = getUserPlain(user);
        expect(plainUser).toBeDefined();
        expect(plainUser.firstname).toBe('Base');
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
        const affected = await repo.update(1, { firstname: 'Updated' });
        expect(affected).toBe(1); // Expect one row to be affected
        const updatedUser = await repo.findById(1);
        const plainUser = getUserPlain(updatedUser);
        expect(plainUser.firstname).toBe('Updated');
    });

    it('should delete a user', async () => {
        const affected = await repo.delete(1);
        expect(typeof affected).toBe('number');
    });
});
