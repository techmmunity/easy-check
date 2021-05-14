import { isDivisibleByTen } from "checks/number/is-divisible-by-ten";

/**
 *
 * True
 *
 */

describe("isDivisibleByTen (return True)", () => {
	it("10", () => {
		const result = isDivisibleByTen(10);
		expect(result).toBe(true);
	});

	it("20", () => {
		const result = isDivisibleByTen(20);
		expect(result).toBe(true);
	});

	it("30", () => {
		const result = isDivisibleByTen(30);
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isDivisibleByTen (return False)", () => {
	it("15", () => {
		const result = isDivisibleByTen(15);
		expect(result).toBe(false);
	});

	it("23", () => {
		const result = isDivisibleByTen(23);
		expect(result).toBe(false);
	});

	it("27", () => {
		const result = isDivisibleByTen(27);
		expect(result).toBe(false);
	});
});
