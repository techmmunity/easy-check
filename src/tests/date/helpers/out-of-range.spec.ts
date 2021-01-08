import { outOfRange } from "checks/date/helpers";

/**
 *
 * True
 *
 */

describe("outOfRange (return True)", () => {
	it("bigger than range", () => {
		const result = outOfRange(11, 1, 10);
		expect(result).toBe(true);
	});

	it("tinner than range", () => {
		const result = outOfRange(0, 1, 10);
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("outOfRange (return False)", () => {
	it("in the range", () => {
		const result = outOfRange(1, 0, 2);
		expect(result).toBe(false);
	});

	it("in the max limit of range", () => {
		const result = outOfRange(2, 0, 2);
		expect(result).toBe(false);
	});

	it("in the min limit of range", () => {
		const result = outOfRange(0, 0, 2);
		expect(result).toBe(false);
	});
});
