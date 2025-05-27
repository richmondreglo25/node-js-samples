module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/ts/test/unit'], // Updated to reflect the new folder structure
    testMatch: ['**/*.test.ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'ts/src/app/**/*.ts', // Updated path
        '!ts/src/app/**/index.ts',
        '!ts/src/app/**/swagger.ts',
        '!ts/src/app/**/sequelizeConfig.js',
        '!ts/src/app/**/dbConfig.ts',
        '!ts/src/app/**/migrations/**',
        '!ts/src/app/**/seeders/**',
        '!ts/src/test/**',
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleDirectories: ['node_modules', 'ts/src'], // Updated to reflect the new folder structure
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/ts/src/app/$1', // Updated alias mapping
    },
};
