const path = require('path');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'client/**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/cypress/**',
    '!client/pages/_.vue',
  ],
  coverageReporters: ['text-summary', 'lcov'],
  rootDir: path.resolve(__dirname),
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/test/mocks/fileMock.js', //eslint-disable-line
    '^~/(.*)$': '<rootDir>/client/$1',
    '^~~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/cypress',
    '/cypress/',
    '/node_modules/',
    '/cache/',
  ],
  testMatch: ['<rootDir>/client/**/*.test.(js|jsx|ts|tsx)'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@babel/runtime/helpers/esm)'],
};
