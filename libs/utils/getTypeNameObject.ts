import { TSESTree } from '@typescript-eslint/utils';

export const getTypeNameObject = (node: TSESTree.ArrowFunctionExpression) =>
  (
    (node.parent as unknown as TSESTree.VariableDeclarator).id?.typeAnnotation?.typeAnnotation as
      | TSESTree.TSTypeReference
      | undefined
  )?.typeName ?? null;
