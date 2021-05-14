import { makeFunction } from "helpers/make-function";

/**
 * Check if is an number divisible by 10
 */
export const isDivisibleByTen = makeFunction<number>({
	func: (nbr: number) => nbr % 10 === 0,
});
