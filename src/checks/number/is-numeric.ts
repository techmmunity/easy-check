import { makeFunction } from "helpers/make-function";

/**
 * Check if a string contains only numbers
 */
export const isNumeric = makeFunction<string>({
	func: (str: string) => /^\d+$/.test(str),
});
