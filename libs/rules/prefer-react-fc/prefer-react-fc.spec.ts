import { prefereReactFC } from "./prefer-react-fc";
import { tester } from "../../../tests/tester";

tester.run("prefere-react-fc", prefereReactFC, {
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