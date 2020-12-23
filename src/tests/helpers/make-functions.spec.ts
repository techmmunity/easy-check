import { makeFunction } from "checks/helpers";

/**
 *
 * True
 *
 */

describe("makeFunction (return True)", () => {
  it("with valid regex", () => {
    const func = makeFunction({
      regex: new RegExp(""),
    });
    const result = func("foo");
    expect(result).toBe(true);
  });
});

/**
 *
 * False
 *
 */

describe("makeFunction (return False)", () => {
  it("with invalid params", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const func = makeFunction({});
    const result = func("foo");
    expect(result).toBe(false);
  });

  it("with invalid string type", () => {
    const func = makeFunction({
      regex: new RegExp(""),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = func(3);
    expect(result).toBe(false);
  });
});
