module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
}
