import { userService } from '../../../../src/services/userService';
import { userRepository } from '../../../../src/repositories/userRepository';
import { userFactory } from '../../../factories/userFactory';

jest.mock('../../../../src/repositories/userRepository');
jest.mock('../../../../src/models', () => ({
    User: jest.fn(),
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('UserService - addUser', () => {
    it('should add a new user successfully', async () => {
        const newUser = userFactory({ firstname: 'Jane', lastname: 'Doe' }) as any;
        const createdUser = { id: 1, ...newUser };

        jest.mocked(userRepository.create).mockResolvedValue(createdUser);

        const result = await userService.addUser(newUser);

        expect(userRepository.create).toHaveBeenCalledWith(newUser);
        expect(result).toEqual(createdUser);
    });

    it('should throw an error if required fields are missing', async () => {
        const invalidUser = userFactory({ firstname: '', lastname: '' });

        jest.mocked(userRepository.create).mockImplementation(() => {
            throw new Error('Validation error: Missing required fields');
        });

        await expect(userService.addUser(invalidUser)).rejects.toThrow('Validation error: Missing required fields');
        expect(userRepository.create).toHaveBeenCalledWith(invalidUser);
    });

    it('should handle database errors gracefully', async () => {
        const newUser = userFactory({ firstname: 'John', lastname: 'Smith' });

        jest.mocked(userRepository.create).mockRejectedValue(new Error('Database error'));

        await expect(userService.addUser(newUser)).rejects.toThrow('Database error');
        expect(userRepository.create).toHaveBeenCalledWith(newUser);
    });
});