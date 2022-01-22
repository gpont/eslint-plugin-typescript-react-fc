import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils';

export const isArrowFunctionExpression = (
  node: TSESTree.BaseNode | undefined,
): node is TSESTree.ArrowFunctionExpression =>
  node?.type === AST_NODE_TYPES.ArrowFunctionExpression;
