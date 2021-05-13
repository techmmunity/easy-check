import { isInvalidDate } from "checks/date/helpers/is-date";

/**
 *
 * True
 *
 */

describe("isInvalidDate (return True)", () => {
	it("invalid day", () => {
		const result = isInvalidDate(0, 1, 2020);
		expect(result).toBe(true);
	});

	it("invalid month", () => {
		const result = isInvalidDate(1, 13, 2020);
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isInvalidDate (return False)", () => {
	it("with valid date", () => {
		const result = isInvalidDate(1, 1, 2020);
		expect(result).toBe(false);
	});

	it("with valid date", () => {
		const result = isInvalidDate(31, 12, 2020);
		expect(result).toBe(false);
	});
});
