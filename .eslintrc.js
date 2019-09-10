module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: ['vue', 'cypress'],
  rules: {
    'max-len': [1, 140, 2, {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
    'quote-props': [1, 'consistent-as-needed'],
    radix: 0,
    'no-param-reassign': [2, {
      props: false
    }],
    'no-bitwise': 0,
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': 1,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'quotes': [2, 'single', {
      'allowTemplateLiterals': true
    }],
    'vue/require-default-prop': 0,
  }
};
