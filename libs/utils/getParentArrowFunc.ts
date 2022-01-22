import { TSESTree } from '@typescript-eslint/utils';
import { isArrowFunctionExpression } from './isArrowFunctionExpression';

export const getParentArrowFunc = (node: TSESTree.BaseNode) => {
  let { parent } = node;
  while (!isArrowFunctionExpression(parent) && parent?.parent !== null) {
    parent = parent?.parent;
  }

  return parent as TSESTree.ArrowFunctionExpression | null;
};
