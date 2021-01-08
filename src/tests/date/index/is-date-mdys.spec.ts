import { isDateMDYS } from "checks/date";

/**
 *
 * True
 *
 */

describe("isDateMDYS (return True)", () => {
	it("with valid date", () => {
		const result = isDateMDYS("01/01/2020");
		expect(result).toBe(true);
	});

	it("with valid date", () => {
		const result = isDateMDYS("12/31/2020");
		expect(result).toBe(true);
	});
});
