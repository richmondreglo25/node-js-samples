// filepath: c:\Development\git\rreglo-nodejs-api\src\test\utils\stringUtils.test.ts
import stringUtils from '@app/utils/stringUtils';

describe('stringUtils', () => {
    describe('isBlank', () => {
        it('should return true for empty string', () => {
            expect(stringUtils.isBlank('')).toBe(true);
        });
        it('should return true for undefined', () => {
            expect(stringUtils.isBlank(undefined as any)).toBe(true);
        });
        it('should return true for string with only spaces', () => {
            expect(stringUtils.isBlank('   ')).toBe(true);
        });
        it('should return false for non-empty string', () => {
            expect(stringUtils.isBlank('abc')).toBe(false);
        });
    });

    describe('isEmpty', () => {
        it('should return true for empty string', () => {
            expect(stringUtils.isEmpty('')).toBe(true);
        });
        it('should return false for undefined', () => {
            expect(stringUtils.isEmpty(undefined as any)).toBe(false);
        });
        it('should return false for string with only spaces', () => {
            expect(stringUtils.isEmpty('   ')).toBe(false);
        });
        it('should return false for non-empty string', () => {
            expect(stringUtils.isEmpty('abc')).toBe(false);
        });
    });
});

