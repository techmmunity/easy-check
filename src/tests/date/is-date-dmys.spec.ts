import { isDateDMYS } from "checks/date/is-date-dmys";

/**
 *
 * True
 *
 */

describe("isDateDMYS (return True)", () => {
	it("with valid date", () => {
		const result = isDateDMYS("01/01/2020");
		expect(result).toBe(true);
	});

	it("with valid date", () => {
		const result = isDateDMYS("31/12/2020");
		expect(result).toBe(true);
	});
});
