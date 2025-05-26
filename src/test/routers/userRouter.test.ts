import request from 'supertest';
import express from 'express';
import userRouter from '@app/routers/userRouter';
import db from '@app/models';
import { UserAttributes } from '@app/models/userModel';

describe('User API Integration', () => {
    const app = express();
    app.use(express.json());
    app.use('/api/users', userRouter);

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
        await db.users.bulkCreate([
            { firstname: 'Test', lastname: 'User', nickname: 'test', email: 'test@example.com', status: true },
        ]);
    });

    afterAll(async () => {
        await db.sequelize.close();
    });

    it('should get all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should add a user', async () => {
        const user: UserAttributes = {
            firstname: 'Jane', lastname: 'Doe', nickname: 'jane', email: 'jane@example.com', status: true
        };
        const res = await request(app).post('/api/users/add').send(user);
        expect(res.status).toBe(201);
        expect(res.body.firstname).toBe('Jane');
    });

    it('should get a user by id', async () => {
        const res = await request(app).get('/api/users/1');
        expect([200, 404]).toContain(res.status);
    });

    it('should update a user', async () => {
        const res = await request(app).put('/api/users/update/1').send({ firstname: 'Updated', lastname: 'User', nickname: 'up', email: 'up@example.com' });
        expect([204, 404]).toContain(res.status);
    });

    it('should delete a user', async () => {
        const res = await request(app).delete('/api/users/delete/1');
        expect([204, 404]).toContain(res.status);
    });
});
