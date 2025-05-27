module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/ts/test/unit'], // Updated to reflect the new folder structure
    testMatch: ['**/*.test.ts'],
    collectCoverage: true, // Enable coverage collection
    collectCoverageFrom: [
        'ts/src/**/*.{ts,js}', // Include all files in the "src" folder
        '!ts/src/**/index.ts', // Exclude index files
        '!ts/src/**/config/**', // Exclude config files
        '!ts/src/**/repositories/**', // Exclude repositories
        '!ts/src/**/database/**', // Exclude database files
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'], // Specify coverage report formats
    coverageThreshold: {
        global: {
            branches: 80, // At least 80% branch coverage
            functions: 80, // At least 80% function coverage
            lines: 80, // At least 80% line coverage
            statements: 80, // At least 80% statement coverage
        },
    },
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleDirectories: ['node_modules', 'ts/src'], // Updated to reflect the new folder structure
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/ts/src/app/$1', // Updated alias mapping
    },
};
