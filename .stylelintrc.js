module.exports = {
  processors: ["stylelint-processor-html"],
  plugins: ["stylelint-order", "stylelint-scss"],
  extends: "stylelint-config-standard",
  rules: {
    "no-empty-source": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "order/properties-alphabetical-order": true,
    "scss/at-rule-no-unknown": true
  },
  ignoreFiles: ['**/*.js', '*.js'],
};
