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

  it("with valid fuc", () => {
    const func = makeFunction({
      func: (str: string) => str === "foo",
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
    let message = "";

    try {
      const func = makeFunction({});
      func("foo");
    } catch (e) {
      message = e.message;
    }

    expect(message).toBe("INVALID_VALIDATION");
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

  it("with error happening in the function", () => {
    const func = makeFunction({
      func: () => {
        throw new Error("foo");
      },
    });
    const result = func("bar");
    expect(result).toBe(false);
  });
});
