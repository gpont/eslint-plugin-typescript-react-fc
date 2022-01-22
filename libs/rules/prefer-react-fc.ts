import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/types';
import { createRule } from '../utils';

const isArrowFunctionExpression = (
  node: TSESTree.BaseNode | undefined,
): node is TSESTree.ArrowFunctionExpression =>
  node?.type !== AST_NODE_TYPES.ArrowFunctionExpression;

const getParentArrowFunc = (node: TSESTree.ReturnStatement) => {
  let { parent } = node;
  while (!isArrowFunctionExpression(parent) && parent?.parent !== null) {
    parent = parent?.parent;
  }

  return parent as TSESTree.ArrowFunctionExpression | null;
};

const getTypeNameObject = (node: TSESTree.ArrowFunctionExpression) =>
  (
    (node.parent as unknown as TSESTree.VariableDeclarator).id?.typeAnnotation?.typeAnnotation as
      | TSESTree.TSTypeReference
      | undefined
  )?.typeName ?? null;

const isReactFC = (node: TSESTree.EntityName) =>
  node.type === TSESTree.AST_NODE_TYPES.TSQualifiedName &&
  (node.left as TSESTree.Identifier)?.name === 'React' &&
  node.right.name === 'FC';

const isReturnInComponent = (node: TSESTree.ReturnStatement) =>
  node.argument?.type === AST_NODE_TYPES.JSXElement;

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
      haveTo: 'You have to use React.FC',
    },
  },
  defaultOptions: [],
  create: (context) => ({
    // 'VariableDeclaration ArrowFunctionExpression ReturnStatement JsxElement': (node: Rule.Node) => {
    'VariableDeclaration ArrowFunctionExpression ReturnStatement': (
      node: TSESTree.ReturnStatement,
    ) => {
      if (!isReturnInComponent(node)) {
        console.log('NOT COMPONENT!');
        return;
      }

      const arrowFuncStatement = getParentArrowFunc(node);

      if (arrowFuncStatement === null) {
        console.log('NOT FOUND ARROW FUNCTION!');
        return;
      }

      const typeName = getTypeNameObject(arrowFuncStatement);

      if (typeName === null) {
        console.log('NOT FOUND TYPE', { arrowFuncStatement });
        return;
      }

      const hasReactFC = isReactFC(typeName);

      console.log({ hasReactFC });

      // TODO if (!hasReactFC) {
      if (hasReactFC) {
        context.report({
          node,
          messageId: 'haveTo',
        });
      }
    },
  }),
});
