{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "logger": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "no-unused-vars": 0,
    "no-undef": 0,
    "indent": [
      "error",
      2
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "error",
    "react/prop-types": 0,
    "import/prefer-default-export": "off"
  }
}