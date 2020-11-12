module.exports = {
  extends: ['airbnb-typescript'],
  "rules": {
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  },
  parserOptions: {
    project: './tsconfig.json',
  }
};
