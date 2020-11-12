module.exports = {
  extends: ['airbnb-typescript'],
  "rules": {
    "import/prefer-default-export": "off",
    "no-param-reassign": "off"
  },
  parserOptions: {
    project: './tsconfig.json',
  }
};
