import { isBrazillianPhone } from "checks/phone";

/**
 *
 * True
 *
 */

describe("isBrazillianPhone (return True)", () => {
	it("valid number and DDD", () => {
		expect(isBrazillianPhone("19999999999")).toBe(true);
		expect(isBrazillianPhone("2199999999")).toBe(true);
		expect(isBrazillianPhone("31998154821")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isBrazillianPhone (return False)", () => {
	it("number with DDD 11 with only 8 numbers", () => {
		const result = isBrazillianPhone("1199999999");
		expect(result).toBe(false);
	});

	it("number with invalid DDD", () => {
		const result = isBrazillianPhone("3099999999");
		expect(result).toBe(false);
	});

	it("number bigger than allowed", () => {
		const result = isBrazillianPhone("119999999999");
		expect(result).toBe(false);
	});

	it("number lower than allowed", () => {
		const result = isBrazillianPhone("119999999");
		expect(result).toBe(false);
	});
});
