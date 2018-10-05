module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "cypress/globals": true,
    jest: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["airbnb-base", "plugin:vue/recommended"],
  plugins: ["vue", "cypress"],
  rules: {
    "max-len": [1, 220, 2, { ignoreComments: true }],
    "quote-props": [1, "consistent-as-needed"],
    radix: 0,
    "no-param-reassign": [2, { props: false }],
    "no-bitwise": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-unused-vars": 1,
    "func-names": 0,
    "no-underscore-dangle": 0
  }
};
