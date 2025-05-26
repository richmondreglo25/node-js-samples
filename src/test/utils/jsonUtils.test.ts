// filepath: c:\Development\git\rreglo-nodejs-api\src\test\utils\jsonUtils.test.ts
import jsonUtils from '@app/utils/jsonUtils';

describe('jsonUtils', () => {
    describe('stringToJson', () => {
        it('should parse valid JSON string', () => {
            const obj = { foo: 'bar' };
            const jsonString = JSON.stringify(obj);
            expect(jsonUtils.stringToJson(jsonString, 'testConfig')).toEqual(obj);
        });

        it('should throw error for blank string', () => {
            expect(() => jsonUtils.stringToJson('', 'testConfig')).toThrow('testConfig is either null, undefined or empty.');
        });

        it('should throw error for undefined', () => {
            expect(() => jsonUtils.stringToJson(undefined as any, 'testConfig')).toThrow('testConfig is either null, undefined or empty.');
        });

        it('should throw error for invalid JSON', () => {
            expect(() => jsonUtils.stringToJson('not-json', 'testConfig')).toThrow(/testConfig is not a valid JSON String/);
        });
    });
});
