import { makeFunction } from "helpers/make-function";

const IS_SIMPLE_USERNAME = /^[a-zA-Z0-9_-]{3,16}$/;
/**
 * Check if a string is a simple username
 * - 3 to 16 characters
 * - Lower And Upper case allowed
 * - Allows only aplhanumeric and `-` and `_`
 */
export const isSimpleUsername = makeFunction<string>({
	regex: IS_SIMPLE_USERNAME,
});
