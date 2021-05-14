import { isLeap } from "checks/date/is-leap";

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

	it("2020 (string)", () => {
		const result = isLeap("2020");
		expect(result).toBe(true);
	});

	it("2020 (number)", () => {
		const result = isLeap(2020);
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isLeap (return False)", () => {
	it("1902", () => {
		const result = isLeap("1902");
		expect(result).toBe(false);
	});

	it("1930", () => {
		const result = isLeap("1930");
		expect(result).toBe(false);
	});

	it("1969", () => {
		const result = isLeap("1969");
		expect(result).toBe(false);
	});

	it("2007", () => {
		const result = isLeap("2007");
		expect(result).toBe(false);
	});

	it("2013", () => {
		const result = isLeap("2013");
		expect(result).toBe(false);
	});

	it("2020.0", () => {
		const result = isLeap("2020.0");
		expect(result).toBe(false);
	});

	it("2020.1", () => {
		const result = isLeap("2020.1");
		expect(result).toBe(false);
	});
});
