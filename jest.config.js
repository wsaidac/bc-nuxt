module.exports = {
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  roots: [
    './components',
    './layouts',
    './pages',
    './plugins',
  ],
  transform: {
    '^.+\\.js$': './node_modules/babel-jest',
    '.*\\.(vue)$': './node_modules/vue-jest',
  },
  snapshotSerializers: [
    './node_modules/jest-serializer-vue',
  ],
};
