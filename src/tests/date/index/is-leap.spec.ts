import { isLeap } from "checks/date";

/**
 *
 * True
 *
 */

describe("isLeap (return True)", () => {
	it("1904", () => {
		const result = isLeap("1904");
		expect(result).toBe(true);
	});

	it("1936", () => {
		const result = isLeap("1936");
		expect(result).toBe(true);
	});

	it("1968", () => {
		const result = isLeap("1968");
		expect(result).toBe(true);
	});

	it("2000", () => {
		const result = isLeap("2000");
		expect(result).toBe(true);
	});

	it("2020", () => {
		const result = isLeap("2020");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isLeap (return False)", () => {
	it("1904", () => {
		const result = isLeap("1902");
		expect(result).toBe(false);
	});

	it("1936", () => {
		const result = isLeap("1930");
		expect(result).toBe(false);
	});

	it("1968", () => {
		const result = isLeap("1969");
		expect(result).toBe(false);
	});

	it("2000", () => {
		const result = isLeap("2007");
		expect(result).toBe(false);
	});

	it("2020", () => {
		const result = isLeap("2013");
		expect(result).toBe(false);
	});
});
