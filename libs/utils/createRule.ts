import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/gpont/eslint-plugin-typescript-react-fc/blob/main/docs/rules/${name}.md`,
);
