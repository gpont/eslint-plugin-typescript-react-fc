import { TSESTree } from '@typescript-eslint/utils';

export const isReactFC = (node: TSESTree.EntityName) =>
  node.type === TSESTree.AST_NODE_TYPES.TSQualifiedName &&
  (node.left as TSESTree.Identifier)?.name === 'React' &&
  node.right.name === 'FC';
