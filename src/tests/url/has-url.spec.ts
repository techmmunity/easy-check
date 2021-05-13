import { hasUrl } from "checks/url/has-url";

/**
 *
 * True
 *
 */

describe("hasUrl (return True)", () => {
	it("with link at the start", () => {
		const result = hasUrl("https://google.com foo bar foo bar");
		expect(result).toBe(true);
	});

	it("with link at the end", () => {
		const result = hasUrl("foo bar foo bar www.google.com");
		expect(result).toBe(true);
	});

	it("with link at the middle", () => {
		const result = hasUrl("foo bar http://google.com.br foo bar");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasUrl (return False)", () => {
	it("with invalid link at the start", () => {
		const result = hasUrl("https://google foo bar foo bar");
		expect(result).toBe(false);
	});

	it("with invalid link at the end", () => {
		const result = hasUrl("foo bar foo bar emailtest.com");
		expect(result).toBe(false);
	});

	it("with invalid link at the middle", () => {
		const result = hasUrl("foo bar http://localhost:9090 foo bar");
		expect(result).toBe(false);
	});
});
