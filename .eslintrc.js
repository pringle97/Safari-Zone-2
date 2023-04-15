module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "quotes": ["error", "double"]
        "no-multiple-empty-lines": "error",
        "array-bracket-newline": ["error", "always"],
        "array-element-newline": ["error", "always"],
        "semi": ["error", "always"]
    }
}
