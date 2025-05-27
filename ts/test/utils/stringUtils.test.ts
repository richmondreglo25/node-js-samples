import stringUtils from '../../src/utils/stringUtils';

describe('stringUtils', () => {
    it('should return true for blank strings', () => {
        expect(stringUtils.isBlank('')).toBe(true);
        expect(stringUtils.isBlank('   ')).toBe(true);
        expect(stringUtils.isBlank(undefined)).toBe(true);
    });

    it('should return false for non-blank strings', () => {
        expect(stringUtils.isBlank('hello')).toBe(false);
    });
});