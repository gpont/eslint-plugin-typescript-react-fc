import { Rule } from 'eslint';
// eslint-disable-next-line import/no-unresolved
import { Node } from 'estree';

// TODO read https://eslint.org/docs/developer-guide/working-with-rules
export const prefereReactFC: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'prefer React.FC type for props typing',
      recommended: true,
      url: 'https://github.com/gpont/eslint-plugin-typescript-react-fc/blob/main/docs/rules/prefer-react-fc.md',
    },
    fixable: 'code', // TODO
    // TODO hasSuggestions: true
    schema: [], // TODO
    messages: {
      haveTo: 'You have to use React.FC',
    },
  },
  create: (context) => ({
    'VariableDeclaration ArrowFunctionExpression ReturnStatement': (node: Node) => {
      // context.report({
      //   node,
      //   messageId: 'haveTo',
      // });
    },
  }),
};
