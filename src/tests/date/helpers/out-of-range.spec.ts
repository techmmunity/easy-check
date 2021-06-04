import { outOfRange } from "checks/date/helpers/is-date";

/**
 *
 * True
 *
 */

describe("outOfRange (return True)", () => {
	it("bigger than range", () => {
		expect(outOfRange(11, 1, 10)).toBe(true);
	});

	it("tinner than range", () => {
		expect(outOfRange(0, 1, 10)).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("outOfRange (return False)", () => {
	it("in the range", () => {
		expect(outOfRange(1, 0, 2)).toBe(false);
	});

	it("in the max limit of range", () => {
		expect(outOfRange(2, 0, 2)).toBe(false);
	});

	it("in the min limit of range", () => {
		expect(outOfRange(0, 0, 2)).toBe(false);
	});
});
