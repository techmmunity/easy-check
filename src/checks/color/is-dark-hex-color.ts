import { makeFunction } from "helpers/make-function";

import { getColorLuma } from "./helpers/get-color-luma";
import { isHexColor } from "./is-hex-color";

/**
 * Check if a string is a dark hex color
 */
export const isDarkHexColor = makeFunction<string>({
	func: (color: string) => {
		if (isHexColor(color)) {
			const luma = getColorLuma(color);

			return luma < 50;
		}

		return false;
	},
});
