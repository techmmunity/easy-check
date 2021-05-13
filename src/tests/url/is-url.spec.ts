import { isUrl } from "checks/url/is-url";

/**
 *
 * True
 *
 */

describe("isUrl (return True)", () => {
	it("with https", () => {
		const result = isUrl("https://google.com");
		expect(result).toBe(true);
	});

	it("with http", () => {
		const result = isUrl("http://google.com");
		expect(result).toBe(true);
	});

	it("with www", () => {
		const result = isUrl("www.google.com");
		expect(result).toBe(true);
	});

	it("with .com.br", () => {
		const result = isUrl("http://google.com.br");
		expect(result).toBe(true);
	});

	it("with .io", () => {
		const result = isUrl("http://google.io");
		expect(result).toBe(true);
	});

	it("with .tech", () => {
		const result = isUrl("http://google.tech");
		expect(result).toBe(true);
	});

	it("with https and www", () => {
		const result = isUrl("https://www.google.com");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isUrl (return False)", () => {
	it("with https and without .com", () => {
		const result = isUrl("https://google");
		expect(result).toBe(false);
	});

	it("with http and without .com", () => {
		const result = isUrl("http://emailtest");
		expect(result).toBe(false);
	});

	it("without http or https", () => {
		const result = isUrl("emailtest.com");
		expect(result).toBe(false);
	});

	it("with port", () => {
		const result = isUrl("http://localhost:9090");
		expect(result).toBe(false);
	});
});
