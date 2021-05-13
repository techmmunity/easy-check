import { makeFunction } from "helpers/make-function";

import { isDate } from "./helpers/is-date";

/**
 * Check if a string is an valid date format
 * - 2020/01/31
 */
export const isDateYMDS = makeFunction<string>({
	func: (str: string) => isDate(str, "YMD", "/"),
});
