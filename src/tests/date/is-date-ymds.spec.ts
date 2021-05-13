import { isDateYMDS } from "checks/date/is-date-ymds";

/**
 *
 * True
 *
 */

describe("isDateYMDS (return True)", () => {
	it("with valid date", () => {
		const result = isDateYMDS("2020/01/01");
		expect(result).toBe(true);
	});

	it("with valid date", () => {
		const result = isDateYMDS("2020/12/31");
		expect(result).toBe(true);
	});
});
