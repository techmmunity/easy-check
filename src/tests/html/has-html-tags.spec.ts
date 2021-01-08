import { hasHtmlTags } from "checks/html";

/**
 *
 * True
 *
 */

describe("hasHtmlTags (return True)", () => {
	it("with <a>", () => {
		const result = hasHtmlTags('<a href="goog.com">foo</a>');
		expect(result).toBe(true);
	});

	it("with <div>", () => {
		const result = hasHtmlTags("<div>foo</div>");
		expect(result).toBe(true);
	});

	it("with <i>", () => {
		const result = hasHtmlTags("<i>foo</i>");
		expect(result).toBe(true);
	});

	it("with <button>", () => {
		const result = hasHtmlTags("<button>foo</button>");
		expect(result).toBe(true);
	});

	it("with <link />", () => {
		const result = hasHtmlTags('<link rel="stylesheet" />');
		expect(result).toBe(true);
	});

	it("with tag inside tag", () => {
		const result = hasHtmlTags("<div> <button>Foo Bar</button>  </div>");
		expect(result).toBe(true);
	});

	it("with tag in the middle of string", () => {
		const result = hasHtmlTags("foo bar <b>Foo Bar</b> foo bar");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasHtmlTags (return False)", () => {
	it("without tags", () => {
		const result = hasHtmlTags("foo bar");
		expect(result).toBe(false);
	});

	it("with empty tag", () => {
		const result = hasHtmlTags("<>");
		expect(result).toBe(false);
	});
});
