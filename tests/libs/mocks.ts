import { AST, Rule, Scope, SourceCode } from "eslint";
import type * as ESTree from "estree";

interface IReportDescriptor {
  node: ESTree.Node;
  message: string;
}

export interface IMockOptions {
  sourceCode: string;
  ast: AST.Program;
  getAncestors: () => ESTree.Node[];
  getDeclaredVariables(node: ESTree.Node): Scope.Variable[],
  getScope(): Scope.Scope,
  getSourceCode(): SourceCode,
  report: (descriptor: IReportDescriptor) => void;
}

export const createMockContext = ({
  sourceCode,
  ast,
  getAncestors,
  getDeclaredVariables,
  getScope,
  report
}: IMockOptions): Rule.RuleContext => ({
  id: '',
  options: [],
  settings: {},
  parserPath: '',
  parserOptions: {},
  parserServices: undefined,
  getFilename: () => '',
  getPhysicalFilename: () => '',
  getCwd: () => '',
  markVariableAsUsed: () => true,

  getAncestors,
  getDeclaredVariables,
  getScope,
  getSourceCode: () => new SourceCode(sourceCode, ast),
  report,
});
