import { isInvalidDate } from "checks/date/helpers/is-date";

/**
 *
 * True
 *
 */

describe("isInvalidDate (return True)", () => {
	it("invalid day", () => {
		expect(isInvalidDate(0, 1, 2020)).toBe(true);
	});

	it("invalid month", () => {
		expect(isInvalidDate(1, 13, 2020)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isInvalidDate (return False)", () => {
	it("with valid date (1)", () => {
		expect(isInvalidDate(1, 1, 2020)).toBe(false);
	});

	it("with valid date (2)", () => {
		expect(isInvalidDate(31, 12, 2020)).toBe(false);
	});
});
