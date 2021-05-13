import { makeFunction } from "helpers/make-function";

import { isDate } from "./helpers/is-date";

/**
 * Check if a string is an valid date format
 * - 01-31-2020
 */
export const isDateMDY = makeFunction<string>({
	func: (str: string) => isDate(str, "MDY", "-"),
});
