import { isUUID } from "checks/uuid";

/**
 *
 * True
 *
 */

describe("is UUID (return True)", () => {
  it("with valid UUID", () => {
    const result = isUUID("24bd85a1-4eb7-4f63-829e-75c08ac2b6c0");
    expect(result).toBeTruthy();
  });
});

/**
 *
 * False
 *
 */

describe("is UUID (return False)", () => {
  it("with invalid UUID (1)", () => {
    const result = isUUID("24bd85a1-4eb7-4f63-829e-75c08ac2b6t1");
    expect(result).toBe(false);
  });

  it("with invalid UUID (2)", () => {
    const result = isUUID("e7f019ea-4d52-11eb-ae93");
    expect(result).toBe(false);
  });
});
