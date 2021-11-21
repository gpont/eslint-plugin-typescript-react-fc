import { IRule } from "../types";

export const prefereReactFC: IRule = {
  create: (context) => ({
    ImportDeclaration(node) {
      context.report({
        node,
        message: 'Are you sure about this?'
      })
    }
  })
};
