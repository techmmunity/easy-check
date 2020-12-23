import { isSimpleUsername } from "checks/username";

/**
 *
 * True
 *
 */

describe("isSimpleUsername (return True)", () => {
  it("with lower and upper case", () => {
    const result = isSimpleUsername("Techmmunity");
    expect(result).toBe(true);
  });

  it("all upper case", () => {
    const result = isSimpleUsername("TECHMMUNITY");
    expect(result).toBe(true);
  });

  it("only letters", () => {
    const result = isSimpleUsername("techmmunity");
    expect(result).toBe(true);
  });

  it("letters and numbers in the end", () => {
    const result = isSimpleUsername("techmmunity123");
    expect(result).toBe(true);
  });

  it("letters and numbers in the start", () => {
    const result = isSimpleUsername("123techmmunity");
    expect(result).toBe(true);
  });

  it("with -", () => {
    const result = isSimpleUsername("tech-mmunity");
    expect(result).toBe(true);
  });

  it("with _", () => {
    const result = isSimpleUsername("tech_mmunity");
    expect(result).toBe(true);
  });
});

/**
 *
 * False
 *
 */

describe("isSimpleUsername (return False)", () => {
  it("bigger than allowed", () => {
    const result = isSimpleUsername("techmmunitytechmu");
    expect(result).toBe(false);
  });

  it("lower than allowed", () => {
    const result = isSimpleUsername("te");
    expect(result).toBe(false);
  });

  it("with special characters", () => {
    expect(isSimpleUsername("techmmunity#")).toBe(false);
    expect(isSimpleUsername("techmmunity$")).toBe(false);
    expect(isSimpleUsername("techmmunity@")).toBe(false);
    expect(isSimpleUsername("techmmunity/")).toBe(false);
    expect(isSimpleUsername("techmmunity'")).toBe(false);
  });
});
