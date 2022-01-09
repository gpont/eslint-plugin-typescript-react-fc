import { prefereReactFC } from '../../libs/rules/prefer-react-fc';
import { tester } from '../tester';

tester.run('prefere-react-fc', prefereReactFC, {
  valid: [
    `
      const ComponentName: React.FC = () => {
        console.log('smth');

        return 'smth';
      };
    `,
    `
      const ComponentName: React.FC = () => (
        <div></div>
      );
    `,
    `
      const ComponentName: React.FC = () => {
        console.log('smth');

        return (
          <div></div>
        );
      };
    `,
    `
      const ComponentName: React.FC = () => {
        return (
          <div></div>
        );
      };
    `,
    `
      const ComponentName: React.FC = function() {
        return (
          <div></div>
        );
      };
    `,
    `
      interface IComponentNameProps {}

      const ComponentName: React.FC<IComponentNameProps> = () => (
        <div></div>
      );
    `,
    `
      interface IComponentNameProps {}

      const ComponentName: React.FC<IComponentNameProps> = () => {
        return (
          <div></div>
        );
      };
    `,
    `
      interface IComponentNameProps {}

      const ComponentName: React.FC<IComponentNameProps> = function() {
        return (
          <div></div>
        );
      };
    `,
  ],
  invalid: [
    // {
    //   code: `import React from 'react';`,
    //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //   errors: [{ message: prefereReactFC.meta!.messages!.haveTo }],
    // },
  ],
});
