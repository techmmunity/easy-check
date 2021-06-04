import { isDate } from "checks/date/helpers/is-date";

/**
 *
 * True
 *
 */

describe("isDate (return True)", () => {
	it("with valid params (1)", () => {
		expect(isDate("31-01-2020", "DMY", "-")).toBe(true);
	});

	it("with valid params (2)", () => {
		expect(isDate("31/01/2020", "DMY", "/")).toBe(true);
	});

	it("with valid params (3)", () => {
		expect(isDate("01-31-2020", "MDY", "-")).toBe(true);
	});

	it("with valid params (4)", () => {
		expect(isDate("01/31/2020", "MDY", "/")).toBe(true);
	});

	it("with valid params (5)", () => {
		expect(isDate("2020-01-31", "YMD", "-")).toBe(true);
	});

	it("with valid params (6)", () => {
		expect(isDate("2020/01/31", "YMD", "/")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isDate (return False)", () => {
	it("invalid length", () => {
		expect(isDate("01-01", "DMY", "-")).toBe(false);
	});

	it("invalid day length", () => {
		expect(isDate("1-02-2020", "DMY", "-")).toBe(false);
	});

	it("invalid month length", () => {
		expect(isDate("01-1-2020", "DMY", "-")).toBe(false);
	});

	it("invalid year length (bigger)", () => {
		expect(isDate("01-1-20201", "DMY", "-")).toBe(false);
	});

	it("invalid year length (tinner)", () => {
		expect(isDate("01-01-", "DMY", "-")).toBe(false);
	});

	it("invalid day", () => {
		expect(isDate("a1-01-2020", "DMY", "-")).toBe(false);
	});

	it("invalid month", () => {
		expect(isDate("01-a1-2020", "DMY", "-")).toBe(false);
	});

	it("invalid year", () => {
		expect(isDate("01-01-202a", "DMY", "-")).toBe(false);
	});

	it("out of range day (min)", () => {
		expect(isDate("00-01-2020", "DMY", "-")).toBe(false);
	});

	it("out of range day (max)", () => {
		expect(isDate("32-01-2020", "DMY", "-")).toBe(false);
	});

	it("out of range month (min)", () => {
		expect(isDate("01-00-2020", "DMY", "-")).toBe(false);
	});

	it("out of range month (max)", () => {
		expect(isDate("01-13-2020", "DMY", "-")).toBe(false);
	});

	it("out of range year (min)", () => {
		expect(isDate("01-01-0000", "DMY", "-")).toBe(false);
	});

	it("out of range year (max)", () => {
		expect(isDate("01-01-3001", "DMY", "-")).toBe(false);
	});

	it("invalid date", () => {
		expect(isDate("31-02-2020", "DMY", "-")).toBe(false);
	});
});
