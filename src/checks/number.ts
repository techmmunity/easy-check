import { makeFunction } from "helpers/make-function";

/**
 * Check if is an even number
 */
export const isEven = makeFunction<number>({
	func: (nbr: number) => nbr % 2 === 0,
});

/**
 * Check if is an odd number
 */
export const isOdd = makeFunction<number>({
	func: (nbr: number) => nbr % 2 !== 0,
});
