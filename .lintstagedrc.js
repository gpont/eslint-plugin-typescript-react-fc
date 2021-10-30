module.exports = {
  "./**/*.ts": [
    "npm run lint:eslint",
    "npm run lint:prettier",
    "npm run lint:eslint",
    "npm run test:types"
  ],
};
