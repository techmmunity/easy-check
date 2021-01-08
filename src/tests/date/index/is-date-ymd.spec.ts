import { isDateYMD } from "checks/date";

/**
 *
 * True
 *
 */

describe("isDateYMD (return True)", () => {
	it("with valid date", () => {
		const result = isDateYMD("2020-01-01");
		expect(result).toBe(true);
	});

	it("with valid date", () => {
		const result = isDateYMD("2020-12-31");
		expect(result).toBe(true);
	});
});
