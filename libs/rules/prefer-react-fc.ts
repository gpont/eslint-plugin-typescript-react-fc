import { TSESTree } from '@typescript-eslint/utils';
import { createRule, getParentArrowFunc, getTypeNameObject, isReactFC } from '../utils';

// TODO read https://eslint.org/docs/developer-guide/working-with-rules
export const prefereReactFC = createRule({
  name: 'prefere-react-fc',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'prefer React.FC type for props typing',
      recommended: 'error',
    },
    fixable: 'code', // TODO
    // TODO hasSuggestions: true
    schema: [], // TODO
    messages: {
      haveTo: 'You should use React.FC',
    },
  },
  defaultOptions: [],
  create: (context) => ({
    'VariableDeclaration ArrowFunctionExpression JSXElement': (node: TSESTree.JSXElement) => {
      const arrowFuncStatement = getParentArrowFunc(node);

      if (arrowFuncStatement === null) {
        return;
      }

      const typeName = getTypeNameObject(arrowFuncStatement);

      if (typeName === null || !isReactFC(typeName)) {
        context.report({
          node,
          messageId: 'haveTo',
        });
      }
    },
  }),
});
