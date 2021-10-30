import libs from "../../libs";

describe("Rule prefere-react-fc", () => {
  it("should return object", () => {
    expect(typeof libs.rules["prefer-react-fc"]()).toBe("object");
  })
})