import libs from "../../libs";
import { createMockContext, IMockOptions } from "./mocks";

describe("Rule prefere-react-fc", () => {
  it("should exist", () => {
    expect("prefer-react-fc" in libs.rules).toBe(true);
  });

  it("should not throw error with correct context", () => {
    const prefereReactFc = libs.rules["prefer-react-fc"].create;
    const reporter = jest.fn();
    const mockContextOptions: IMockOptions = {
      sourceCode: '',
      // TODO fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ast: {},
      getAncestors: () => [],
      getDeclaredVariables: () => [],
      getScope: () => ({
        type: "block",
        isStrict: false,
        upper: null,
        childScopes: [],
        // TODO fix
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variableScope: {},
        // TODO fix
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        block: {},
        variables: [],
        set: new Map(),
        references: [],
        through: [],
        functionExpressionScope: false
      }),
      report: reporter
    };

    expect(typeof prefereReactFc(createMockContext(mockContextOptions))).toBe("object");
  });
});