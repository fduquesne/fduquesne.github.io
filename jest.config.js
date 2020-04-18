module.exports = {
    moduleFileExtensions: ['js'],
    coveragePathIgnorePatterns: ['/node_modules/', './enzyme.config.js'],
    setupFilesAfterEnv: ['./enzyme.config.js'],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './__tests__/__mocks__/mocks.js',
        '\\.(css|less|scss)$': './__tests__/__mocks__/mocks.js'
    }
};
