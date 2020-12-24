import { isDate } from "checks/date/helpers";

/**
 *
 * True
 *
 */

describe("isDate (return True)", () => {
  it("with valid params", () => {
    const result = isDate("31-01-2020", "DMY", "-");
    expect(result).toBe(true);
  });

  it("with valid params", () => {
    const result = isDate("31/01/2020", "DMY", "/");
    expect(result).toBe(true);
  });

  it("with valid params", () => {
    const result = isDate("01-31-2020", "MDY", "-");
    expect(result).toBe(true);
  });

  it("with valid params", () => {
    const result = isDate("01/31/2020", "MDY", "/");
    expect(result).toBe(true);
  });

  it("with valid params", () => {
    const result = isDate("2020-01-31", "YMD", "-");
    expect(result).toBe(true);
  });

  it("with valid params", () => {
    const result = isDate("2020/01/31", "YMD", "/");
    expect(result).toBe(true);
  });
});

/**
 *
 * False
 *
 */

describe("isDate (return False)", () => {
  it("invalid length", () => {
    const result = isDate("01-01", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid day length", () => {
    const result = isDate("1-02-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid month length", () => {
    const result = isDate("01-1-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid year length (bigger)", () => {
    const result = isDate("01-1-20201", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid year length (tinner)", () => {
    const result = isDate("01-01-", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid day", () => {
    const result = isDate("a1-01-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid month", () => {
    const result = isDate("01-a1-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid year", () => {
    const result = isDate("01-01-202a", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range day (min)", () => {
    const result = isDate("00-01-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range day (max)", () => {
    const result = isDate("32-01-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range month (min)", () => {
    const result = isDate("01-00-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range month (max)", () => {
    const result = isDate("01-13-2020", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range year (min)", () => {
    const result = isDate("01-01-0000", "DMY", "-");
    expect(result).toBe(false);
  });

  it("out of range year (max)", () => {
    const result = isDate("01-01-3001", "DMY", "-");
    expect(result).toBe(false);
  });

  it("invalid date", () => {
    const result = isDate("31-02-2020", "DMY", "-");
    expect(result).toBe(false);
  });
});
