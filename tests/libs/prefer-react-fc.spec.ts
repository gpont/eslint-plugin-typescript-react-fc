import { prefereReactFC } from '../../libs/rules/prefer-react-fc';
import { tester } from '../tester';

tester.run('prefere-react-fc', prefereReactFC, {
  valid: [
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
    `
      const ComponentName = (props: { prop1: string }) => (
        <div></div>
      );
    `,
    `
      const ComponentName = (props: { prop1: string }) => {
        console.log('smth');

        return (
          <div></div>
        );
      };
    `,
    `
      const ComponentName = (props: { prop1: string }) => {
        return (
          <div></div>
        );
      };
    `,
    `
      interface IComponentNameProps {}

      const ComponentName = (props: IComponentNameProps) => (
        <div></div>
      );
    `,
    `
      interface IComponentNameProps {}

      const ComponentName = (props: IComponentNameProps) => {
        return (
          <div></div>
        );
      };
    `,
  ].map((code) => ({
    code,
    errors: [{ messageId: 'haveTo' }],
  })),
});
