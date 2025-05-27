import dotenv from 'dotenv';

// Load the test environment variables
dotenv.config({ path: '.env.test' });

// Mock Sequelize models globally if needed
jest.mock('@app/models', () => {
    const mockUser = {
        findAll: jest.fn().mockResolvedValue([
            { id: 1, firstname: 'John', lastname: 'Doe', nickname: 'johnd', email: 'john@example.com', status: true },
        ]),
        findByPk: jest.fn().mockResolvedValue({ id: 1, firstname: 'John', lastname: 'Doe', nickname: 'johnd', email: 'john@example.com', status: true }),
        create: jest.fn().mockResolvedValue({ id: 2, firstname: 'Jane', lastname: 'Doe', nickname: 'janed', email: 'jane@example.com', status: true }),
        update: jest.fn().mockResolvedValue([1]), // Sequelize returns an array with the number of affected rows
        destroy: jest.fn().mockResolvedValue(1), // Sequelize returns the number of rows deleted
    };

    return {
        users: mockUser,
    };
});