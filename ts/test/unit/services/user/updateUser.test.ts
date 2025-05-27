import { userService } from '../../../../src/services/userService';
import { userRepository } from '../../../../src/repositories/userRepository';

jest.mock('../../../../src/repositories/userRepository');
jest.mock('../../../../src/models', () => ({
    User: jest.fn(),
}));

afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
});

describe('UserService - updateUser', () => {
    it('should update an existing user successfully', async () => {
        const updatedData = { firstname: 'Jane', lastname: 'Doe' };
        const userId = 1;
        jest.mocked(userRepository.update).mockResolvedValue(userId);

        const result = await userService.updateUser(userId, updatedData);

        expect(userRepository.update).toHaveBeenCalledWith(userId, updatedData);
        expect(result).toBe(userId);
    });

    it('should return null if the user does not exist', async () => {
        const updatedData = { firstname: 'Jane', lastname: 'Doe' };
        const userId = 999;
        jest.mocked(userRepository.update).mockResolvedValue(null);

        const result = await userService.updateUser(userId, updatedData);

        expect(userRepository.update).toHaveBeenCalledWith(userId, updatedData);
        expect(result).toBeNull();
    });

    it('should handle database errors gracefully', async () => {
        const updatedData = { firstname: 'John', lastname: 'Smith' };
        const userId = 1;
        jest.mocked(userRepository.update).mockRejectedValue(new Error('Database error'));

        await expect(userService.updateUser(userId, updatedData)).rejects.toThrow('Database error');
        expect(userRepository.update).toHaveBeenCalledWith(userId, updatedData);
    });
});
