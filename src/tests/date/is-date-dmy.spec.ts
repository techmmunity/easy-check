import { isDateDMY } from "checks/date/is-date-dmy";

/**
 *
 * True
 *
 */

describe("isDateDMY (return True)", () => {
	it("with valid date", () => {
		const result = isDateDMY("01-01-2020");
		expect(result).toBe(true);
	});

	it("with valid date", () => {
		const result = isDateDMY("31-12-2020");
		expect(result).toBe(true);
	});
});
