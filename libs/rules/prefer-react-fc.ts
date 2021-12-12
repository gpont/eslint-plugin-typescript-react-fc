import { Rule } from "eslint";
// eslint-disable-next-line import/no-unresolved
import { Node } from "estree";

// TODO read https://eslint.org/docs/developer-guide/working-with-rules
export const prefereReactFC: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
        description: "disallow unnecessary semicolons", // TODO
        category: "Possible Errors", // TODO
        recommended: true,
        url: "https://github.com/gpont/eslint-plugin-typescript-react-fc/blob/main/docs/rules/prefer-react-fc.md"
    },
    fixable: "code", // TODO
    schema: [] // TODO
  },
  create: (context) => ({
    "VariableDeclaration > ArrowFunction > ParenthesizedExpression > JsxElement": (node: Node) => {
      context.report({
        node,
        message: 'You have to use React.FC'
      })
    }
  })
};
