import { isDifferent } from "checks/date/helpers";

/**
 *
 * True
 *
 */

describe("different (return True)", () => {
	it("with invalid values", () => {
		const result = isDifferent(1, "1");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("different (return False)", () => {
	it("with valid values", () => {
		const result = isDifferent(1, "01");
		expect(result).toBe(false);
	});
});
