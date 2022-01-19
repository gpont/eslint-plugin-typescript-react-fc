import { Rule } from 'eslint';
// eslint-disable-next-line import/no-unresolved
import { Node, ArrowFunctionExpression } from 'estree';
import { Statement, VariableDeclaration } from 'typescript';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getParentArrowFuncFromReturnStatement = (node) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let { parent } = node;
  while (parent.type !== 'ArrowFunctionExpression') {
    parent = parent.node;
  }
};

/**
 * ArrowFunctionExpression.parent === VariableDeclarator
 * @param node ArrowFunctionExpression
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getTypeNameObject = (node) => node.parent.id.typeAnnotation.typeAnnotation.typeName;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isReactFC = (node) =>
  node.type === 'TSQualifiedName' && node.left.name === 'React' && node.right.name === 'FC';

/**
 * @param node ReturnStatement
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isComponent = (node) => node.argument.type === 'JSXElement';

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
    // 'VariableDeclaration ArrowFunctionExpression ReturnStatement JsxElement': (node: Rule.Node) => {
    'VariableDeclaration ArrowFunctionExpression ReturnStatement': (node: Rule.Node) => {
      // const returnStatement = node.parent;
      // const test = isReactFC(getTypeNameObject(returnStatement));

      console.log({ node, isComponent: isComponent(node) });

      context.report({
        node,
        messageId: 'haveTo',
      });
    },
  }),
};
