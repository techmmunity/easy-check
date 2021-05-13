import { makeFunction } from "helpers/make-function";

/**
 * Check if a string is an leap year
 */
export const isLeap = makeFunction<string>({
	func: (year: string) => new Date(parseInt(year, 10), 1, 29).getMonth() === 1,
});
