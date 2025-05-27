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

describe('UserService - getUserById', () => {
    it('should fetch a user by ID', async () => {
        const mockUser = {
            ...userFactory({ id: 1 }),
        } as any;
        jest.mocked(userRepository.findById).mockResolvedValue(mockUser);

        const result = await userService.getUserById(1);

        expect(userRepository.findById).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockUser);
    });

    it('should return null if user is not found', async () => {
        jest.mocked(userRepository.findById).mockResolvedValue(null);

        const result = await userService.getUserById(999);

        expect(userRepository.findById).toHaveBeenCalledWith(999);
        expect(result).toBeNull();
    });

    it('should handle errors gracefully', async () => {
        jest.mocked(userRepository.findById).mockRejectedValue(new Error('Database error'));

        await expect(userService.getUserById(1)).rejects.toThrow('Database error');
        expect(userRepository.findById).toHaveBeenCalledWith(1);
    });
});
