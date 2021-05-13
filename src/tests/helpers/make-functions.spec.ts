import { makeFunction } from "helpers/make-function";

/**
 *
 * True
 *
 */

describe("makeFunction (return True)", () => {
	it("with valid regex", () => {
		const func = makeFunction<string>({
			regex: new RegExp(""),
		});
		const result = func("foo");
		expect(result).toBe(true);
	});

	it("with valid fuc", () => {
		const func = makeFunction<string>({
			func: (str: string) => str === "foo",
		});
		const result = func("foo");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("makeFunction (return False)", () => {
	it("with invalid params", () => {
		let result;

		try {
			const func = makeFunction<string>({});
			result = func("foo");
		} catch (e) {
			result = e;
		}

		expect(result).toBe(false);
	});

	it("with invalid string type", () => {
		let result;

		try {
			const func = makeFunction<string>({
				regex: new RegExp(""),
			});

			result = func(3 as any);
		} catch (e) {
			result = e;
		}

		expect(result).toBe(false);
	});

	it("with error happening in the function", () => {
		let result;

		try {
			const func = makeFunction<string>({
				func: () => {
					throw new Error("foo");
				},
			});

			result = func("bar");
		} catch (e) {
			result = e;
		}

		expect(result).toBe(false);
	});
});
