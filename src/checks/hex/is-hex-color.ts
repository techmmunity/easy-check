import { makeFunction } from "helpers/make-function";

const IS_HEX_COLOR = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
/**
 * Check if a string is a hex color
 */
export const isHexColor = makeFunction<string>({
	regex: IS_HEX_COLOR,
});
