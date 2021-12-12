import { Rule } from "eslint";

export const prefereReactFC: Rule.RuleModule = {
  create: (context) => ({
    "ImportDeclaration": (node) => {
      context.report({
        node,
        message: 'Are you sure about this?'
      })
    }
  })
};
