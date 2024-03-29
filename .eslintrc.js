module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: "standard",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    quotes: [
      "error",
      "double"
    ],
    "array-element-newline": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": "error"
  }
}
