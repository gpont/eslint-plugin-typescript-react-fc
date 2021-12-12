import { prefereReactFC } from "../../libs/rules/prefer-react-fc";
import { tester } from "../tester";

tester.run("prefere-react-fc", prefereReactFC, {
  valid: [
    {
      code: `
        import React from 'react';

        const ComponentName: React.FC = () => (
          <div></div>
        );
      `
    },
    {
      code: `
        const ComponentName: React.FC = () => {
          return (
            <div></div>
          );
        };
      `
    },
    {
      code: `
        const ComponentName: React.FC = function() {
          return (
            <div></div>
          );
        };
      `
    },
    {
      code: `
        interface IComponentNameProps {}

        const ComponentName: React.FC<IComponentNameProps> = () => (
          <div></div>
        );
      `
    },
    {
      code: `
        interface IComponentNameProps {}

        const ComponentName: React.FC<IComponentNameProps> = () => {
          return (
            <div></div>
          );
        };
      `
    },
    {
      code: `
        interface IComponentNameProps {}

        const ComponentName: React.FC<IComponentNameProps> = function() {
          return (
            <div></div>
          );
        };
      `
    },
  ],
  invalid: [
    {
      code: `import React from 'react';`,
      errors: [{ message: "Are you sure about this?" }],
    },
  ],
});