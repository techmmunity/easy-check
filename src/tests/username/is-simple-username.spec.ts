import { isSimpleUsername } from "checks/username/is-simple-username";

/**
 *
 * True
 *
 */

describe("isSimpleUsername (return True)", () => {
	it("with lower and upper case", () => {
		expect(isSimpleUsername("Techmmunity")).toBe(true);
	});

	it("all upper case", () => {
		expect(isSimpleUsername("TECHMMUNITY")).toBe(true);
	});

	it("only letters", () => {
		expect(isSimpleUsername("techmmunity")).toBe(true);
	});

	it("letters and numbers in the end", () => {
		expect(isSimpleUsername("techmmunity123")).toBe(true);
	});

	it("letters and numbers in the start", () => {
		expect(isSimpleUsername("123techmmunity")).toBe(true);
	});

	it("with -", () => {
		expect(isSimpleUsername("tech-mmunity")).toBe(true);
	});

	it("with _", () => {
		expect(isSimpleUsername("tech_mmunity")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isSimpleUsername (return False)", () => {
	it("bigger than allowed", () => {
		expect(isSimpleUsername("techmmunitytechmu")).toBe(false);
	});

	it("lower than allowed", () => {
		expect(isSimpleUsername("te")).toBe(false);
	});

	it("with special characters (1)", () => {
		expect(isSimpleUsername("techmmunity#")).toBe(false);
	});

	it("with special characters (2)", () => {
		expect(isSimpleUsername("techmmunity$")).toBe(false);
	});

	it("with special characters (3)", () => {
		expect(isSimpleUsername("techmmunity@")).toBe(false);
	});

	it("with special characters (4)", () => {
		expect(isSimpleUsername("techmmunity/")).toBe(false);
	});

	it("with special characters (5)", () => {
		expect(isSimpleUsername("techmmunity'")).toBe(false);
	});
});
