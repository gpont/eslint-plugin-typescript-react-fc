import { prefereReactFC } from '../../libs/rules/prefer-react-fc';
import { tester } from '../tester';

tester.run('prefere-react-fc', prefereReactFC, {
  valid: [
    {
      code: `
        const ComponentName: React.FC = () => {
          console.log('smth');

          return 'smth';
        };
      `,
    },
    {
      code: `
        const ComponentName: React.FC = () => (
          <div></div>
        );
      `,
    },
    // {
    //   code: `
    //     const ComponentName: React.FC = () => {
    //       console.log('smth');

    //       return (
    //         <div></div>
    //       );
    //     };
    //   `
    // },
    // {
    //   code: `
    //     const ComponentName: React.FC = () => {
    //       return (
    //         <div></div>
    //       );
    //     };
    //   `
    // },
    // {
    //   code: `
    //     const ComponentName: React.FC = function() {
    //       return (
    //         <div></div>
    //       );
    //     };
    //   `
    // },
    // {
    //   code: `
    //     interface IComponentNameProps {}

    //     const ComponentName: React.FC<IComponentNameProps> = () => (
    //       <div></div>
    //     );
    //   `
    // },
    // {
    //   code: `
    //     interface IComponentNameProps {}

    //     const ComponentName: React.FC<IComponentNameProps> = () => {
    //       return (
    //         <div></div>
    //       );
    //     };
    //   `
    // },
    // {
    //   code: `
    //     interface IComponentNameProps {}

    //     const ComponentName: React.FC<IComponentNameProps> = function() {
    //       return (
    //         <div></div>
    //       );
    //     };
    //   `
    // },
  ],
  invalid: [
    // {
    //   code: `import React from 'react';`,
    //   errors: [{ message: 'You have to use React.FC' }],
    // },
  ],
});
