import { isBrazillianPhone } from "checks/phone/is-brazzilian-phone";

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
		expect(isBrazillianPhone("1199999999")).toBe(false);
	});

	it("number with invalid DDD", () => {
		expect(isBrazillianPhone("3099999999")).toBe(false);
	});

	it("number bigger than allowed", () => {
		expect(isBrazillianPhone("119999999999")).toBe(false);
	});

	it("number lower than allowed", () => {
		expect(isBrazillianPhone("119999999")).toBe(false);
	});
});
