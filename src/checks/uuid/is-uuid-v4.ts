import { makeFunction } from "helpers/make-function";

const IS_UUID_V4 =
	/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
/**
 * Check if a string is valid UUID (version 4)
 */
export const isUUIDv4 = makeFunction<string>({
	regex: IS_UUID_V4,
});
