import { makeFunction } from "helpers/make-function";

/**
 * Check if a string is an leap year
 */
export const isLeap = makeFunction<number | string>({
	func: (year: number | string) => {
		const yearString = String(year);
		const yearNumber = parseInt(yearString, 10);

		if (String(yearNumber).length !== yearString.length) {
			return false;
		}

		return new Date(yearNumber, 1, 29).getMonth() === 1;
	},
});
