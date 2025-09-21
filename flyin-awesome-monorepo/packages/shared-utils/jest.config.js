module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.ts'
    ],
    testMatch: [
        '**/tests/**/*.{ts,tsx}',
        '**/*.(test|spec).{ts,tsx}'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ]
};