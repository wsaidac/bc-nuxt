module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '../node_modules/jest-vue-preprocessor',
  },
  setupFiles: ['./register-context.js'],
  transformIgnorePatterns: [
    // '../node_modules/(?!(@storybook/.*\\.vue$))',
    '../node_modules/(?!@babel/runtime/helpers/esm)'
  ],
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
};
