import { isDifferent } from "checks/date/helpers/is-date";

/**
 *
 * True
 *
 */

describe("different (return True)", () => {
	it("with invalid values", () => {
		expect(isDifferent(1, "1")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("different (return False)", () => {
	it("with valid values", () => {
		expect(isDifferent(1, "01")).toBe(false);
	});
});
