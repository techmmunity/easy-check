import { makeFunction } from "helpers/make-function";

const IS_STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*#?&]{6,100}$/;
/**
 * Check if a string is a strong password
 * - At least 6 characters
 * - At most 100 characters
 * - At least one Uppercase
 * - At least one Lowercase
 * - At least one Number
 * - At least one of @#$!%*?&
 */
export const isStrongPassword = makeFunction<string>({
	regex: IS_STRONG_PASSWORD,
});
