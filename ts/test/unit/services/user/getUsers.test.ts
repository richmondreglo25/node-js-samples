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

describe('UserService - getUsers', () => {
    it('should fetch all active users when fetchDeleted is false', async () => {
        const mockUsers = [
            { id: 1, ...userFactory({ status: true }) },
            { id: 2, ...userFactory({ status: true }) },
        ] as any;
        jest.mocked(userRepository.findAll).mockResolvedValue(mockUsers);

        const result = await userService.getUsers(false);

        expect(userRepository.findAll).toHaveBeenCalledWith({ where: { status: true } });
        expect(result).toEqual(mockUsers);
    });

    it('should fetch all users including deleted when fetchDeleted is true', async () => {
        const mockUsers = [
            { id: 1, ...userFactory({ status: true }) },
            { id: 2, ...userFactory({ status: false }) },
        ] as any;
        jest.mocked(userRepository.findAll).mockResolvedValue(mockUsers);

        const result = await userService.getUsers(true);

        expect(userRepository.findAll).toHaveBeenCalledWith({ where: {} });
        expect(result).toEqual(mockUsers);
    });

    it('should handle errors gracefully', async () => {
        jest.mocked(userRepository.findAll).mockRejectedValue(new Error('Database error'));

        await expect(userService.getUsers(false)).rejects.toThrow('Database error');
        expect(userRepository.findAll).toHaveBeenCalledWith({ where: { status: true } });
    });
});
