import { isEmail } from "checks/email";

/**
 *
 * True
 *
 */

describe("isEmail (return True)", () => {
  it("with .com", () => {
    const result = isEmail("email@test.com");
    expect(result).toBe(true);
  });

  it("with .com.br", () => {
    const result = isEmail("email@test.com.br");
    expect(result).toBe(true);
  });

  it("with numbers at the end", () => {
    const result = isEmail("email123@test.com");
    expect(result).toBe(true);
  });

  it("with numbers at the start", () => {
    const result = isEmail("123email@test.com");
    expect(result).toBe(true);
  });

  it("with dot in the middle", () => {
    const result = isEmail("email.test@test.com");
    expect(result).toBe(true);
  });
});

/**
 *
 * False
 *
 */

describe("isEmail (return False)", () => {
  it("whithout @", () => {
    const result = isEmail("emailtest.com");
    expect(result).toBe(false);
  });

  it("whithout @ ands with number", () => {
    const result = isEmail("emailtest123.com");
    expect(result).toBe(false);
  });

  it("without dot", () => {
    const result = isEmail("email@test");
    expect(result).toBe(false);
  });

  it("without dot at the end and with dot at the middle", () => {
    const result = isEmail("email.test@test");
    expect(result).toBe(false);
  });
});
