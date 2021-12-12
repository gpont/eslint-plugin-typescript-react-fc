import { RuleTester } from "eslint";
import libs from "../../libs";

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2021
  }
});

tester.run("prefere-react-fc", libs.rules["prefer-react-fc"], {
  valid: [
    { code: `fn('hoge')` },
  ],
  invalid: [
    {
      code: `import React from 'react';`,
      errors: [{ message: "Are you sure about this?" }],
    },
  ],
});