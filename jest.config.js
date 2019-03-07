const path = require('path');

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/cypress/**',
  ],
  coverageReporters: ['text-summary'],
  rootDir: path.resolve(__dirname),
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks/fileMock.js',
    '^~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/cypress',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@babel/runtime/helpers/esm)'],
};
