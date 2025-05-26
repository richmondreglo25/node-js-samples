module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/test'],
    testMatch: ['**/*.test.ts'],
    coverageDirectory: 'coverage',
    testSequencer: '@jest/test-sequencer', // Run tests synchronously
    maxWorkers: 1, // Force Jest to run tests in a single worker (serially)
    collectCoverageFrom: [
        'src/app/**/*.ts',
        '!src/app/**/index.ts',
        '!src/app/**/swagger.ts',
        '!src/app/**/sequelizeConfig.js',
        '!src/app/**/dbConfig.ts',
        '!src/app/**/migrations/**',
        '!src/app/**/seeders/**',
        '!src/test/**',
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1',
    },
};
