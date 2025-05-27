import jsonUtils from '../../../src/utils/jsonUtils';

describe('jsonUtils - stringToJson', () => {
    it('should parse valid JSON strings', () => {
        const jsonString = '{"key":"value"}';
        const result = jsonUtils.stringToJson(jsonString, 'testConfig');
        expect(result).toEqual({ key: 'value' });
    });

    it('should throw an error for empty JSON strings', () => {
        const emptyJsonString = '';
        expect(() => {
            jsonUtils.stringToJson(emptyJsonString, 'testConfig');
        }).toThrow('testConfig is either null, undefined or empty.');
    });

    it('should throw an error for invalid JSON strings', () => {
        const invalidJsonString = '{key:value}';
        expect(() => {
            jsonUtils.stringToJson(invalidJsonString, 'testConfig');
        }).toThrow();
    });
});