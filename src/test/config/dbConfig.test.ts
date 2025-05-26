import { test, expect, describe } from '@jest/globals';
import * as dbConfig from '@app/config/dbConfig';

describe('dbConfig', () => {
    test('should export test, development, and production configs', () => {
        expect(dbConfig).toHaveProperty('test');
        expect(dbConfig).toHaveProperty('development');
        expect(dbConfig).toHaveProperty('production');
    });

    test('should have required properties in each config', () => {
        ['test', 'development', 'production'].forEach((env) => {
            const configObj = (dbConfig as any)[env];
            expect(configObj).toBeDefined();
            expect(configObj).toHaveProperty('username');
            expect(configObj).toHaveProperty('password');
            expect(configObj).toHaveProperty('database');
            expect(configObj).toHaveProperty('host');
            expect(configObj).toHaveProperty('port');
            expect(configObj).toHaveProperty('dialect');
            expect(configObj).toHaveProperty('pool');
        });
    });
});
