import stringUtils from '../../../src/utils/stringUtils';

describe('stringUtils - isBlank', () => {
    it('should return true for blank strings', () => {
        expect(stringUtils.isBlank('')).toBe(true);
        expect(stringUtils.isBlank('   ')).toBe(true);
        expect(stringUtils.isBlank(undefined)).toBe(true);
    });

    it('should return false for non-blank strings', () => {
        expect(stringUtils.isBlank('hello')).toBe(false);
    });

    it('should return true for strings with only whitespace', () => {
        expect(stringUtils.isBlank('   ')).toBe(true);
        expect(stringUtils.isBlank('\t\n')).toBe(true);
    });

    it('should return false for strings with non-whitespace characters', () => {
        expect(stringUtils.isBlank(' hello ')).toBe(false);
        expect(stringUtils.isBlank('  \t hello \n ')).toBe(false);
    });
});

describe('stringUtils - isEmpty', () => {
    it('should return true for empty string', () => {
        expect(stringUtils.isEmpty('')).toBe(true);
    });

    it('should return false for undefined', () => {
        expect(stringUtils.isEmpty(undefined)).toBe(false);
    });

    it('should return false for string with only whitespace', () => {
        expect(stringUtils.isEmpty('   ')).toBe(false);
        expect(stringUtils.isEmpty('\t\n')).toBe(false);
    });

    it('should return false for non-empty strings', () => {
        expect(stringUtils.isEmpty('hello')).toBe(false);
        expect(stringUtils.isEmpty(' hello ')).toBe(false);
    });
});