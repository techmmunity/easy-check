import { makeFunction } from "../../helpers/make-function";
import { isDate } from "./helpers";

/**
 * Check if a string is an valid date format
 * - 31/01/2020
 */
export const isDateDMYS = makeFunction<string>({
	func: (str: string) => isDate(str, "DMY", "/"),
});

/**
 * Check if a string is an valid date format
 * - 31-01-2020
 */
export const isDateDMY = makeFunction<string>({
	func: (str: string) => isDate(str, "DMY", "-"),
});

/**
 * Check if a string is an valid date format
 * - 2020/01/31
 */
export const isDateYMDS = makeFunction<string>({
	func: (str: string) => isDate(str, "YMD", "/"),
});

/**
 * Check if a string is an valid date format
 * - 2020-01-31
 */
export const isDateYMD = makeFunction<string>({
	func: (str: string) => isDate(str, "YMD", "-"),
});

/**
 * Check if a string is an valid date format
 * - 01/31/2020
 */
export const isDateMDYS = makeFunction<string>({
	func: (str: string) => isDate(str, "MDY", "/"),
});

/**
 * Check if a string is an valid date format
 * - 01-31-2020
 */
export const isDateMDY = makeFunction<string>({
	func: (str: string) => isDate(str, "MDY", "-"),
});

/**
 * Check if a string is an leap year
 */
export const isLeap = makeFunction<string>({
	func: (year: string) => new Date(parseInt(year, 10), 1, 29).getMonth() === 1,
});
