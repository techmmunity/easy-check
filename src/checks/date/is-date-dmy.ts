import { makeFunction } from "helpers/make-function";

import { isDate } from "./helpers/is-date";

/**
 * Check if a string is an valid date format
 * - 31-01-2020
 */
export const isDateDMY = makeFunction<string>({
	func: (str: string) => isDate(str, "DMY", "-"),
});
