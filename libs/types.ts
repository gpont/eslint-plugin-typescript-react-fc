import {Rule} from 'eslint';

export interface IRule {
  create: (context: Rule.RuleContext) => Rule.RuleListener;
}
