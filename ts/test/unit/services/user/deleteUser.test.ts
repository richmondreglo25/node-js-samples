import { userService } from '../../../../src/services/userService';
import { userRepository } from '../../../../src/repositories/userRepository';

jest.mock('../../../../src/repositories/userRepository');
jest.mock('../../../../src/models', () => ({
    User: jest.fn(),
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('UserService - deleteUser', () => {
    it('should mark a user as deleted successfully', async () => {
        const userId = 1;
        jest.mocked(userRepository.update).mockResolvedValue(userId);

        const result = await userService.deleteUser(userId);

        expect(userRepository.update).toHaveBeenCalledWith(userId, { status: false });
        expect(result).toBe(userId);
    });

    it('should return null if the user does not exist', async () => {
        const userId = 999;
        jest.mocked(userRepository.update).mockResolvedValue(null);

        const result = await userService.deleteUser(userId);

        expect(userRepository.update).toHaveBeenCalledWith(userId, { status: false });
        expect(result).toBeNull();
    });

    it('should handle database errors gracefully', async () => {
        const userId = 1;
        jest.mocked(userRepository.update).mockRejectedValue(new Error('Database error'));

        await expect(userService.deleteUser(userId)).rejects.toThrow('Database error');
        expect(userRepository.update).toHaveBeenCalledWith(userId, { status: false });
    });
});
