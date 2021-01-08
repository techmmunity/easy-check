import { hasEmojis } from "checks/emoji";

/**
 *
 * True
 *
 */

describe("hasEmojis (return True)", () => {
	it("with emoji in the start", () => {
		const result = hasEmojis("😀 foo bar");
		expect(result).toBe(true);
	});

	it("with emoji in the middle", () => {
		const result = hasEmojis("foo 😀 bar");
		expect(result).toBe(true);
	});

	it("with emoji in the end", () => {
		const result = hasEmojis("foo bar 😀");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("hasEmojis (return False)", () => {
	it("without emojis", () => {
		const result = hasEmojis("foo bar");
		expect(result).toBe(false);
	});

	it("with simbols", () => {
		const result = hasEmojis("foo ✢ bar");
		expect(result).toBe(false);
	});
});
