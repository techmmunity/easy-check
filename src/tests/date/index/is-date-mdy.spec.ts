import { isDateMDY } from "checks/date";

/**
 *
 * True
 *
 */

describe("isDateMDY (return True)", () => {
  it("with valid date", () => {
    const result = isDateMDY("01-01-2020");
    expect(result).toBe(true);
  });

  it("with valid date", () => {
    const result = isDateMDY("12-31-2020");
    expect(result).toBe(true);
  });
});
