import { makeFunction } from "helpers/make-function";

const IS_URL = /^(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*$/;
/**
 * Check if a string is an url
 * - https://google.com
 * - http://localhost:9090
 * - www.google.com
 */
export const isUrl = makeFunction<string>({
	regex: IS_URL,
});

const HAS_URL = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*/;
/**
 * Check if has urls in the string
 * - https://google.com
 * - http://localhost:9090
 * - www.google.com
 */
export const hasUrl = makeFunction<string>({
	regex: HAS_URL,
});
