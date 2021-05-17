const getColorWithCorrectLength = (color: string) => {
	if (color.length === 3) {
		const colorSplitted = color.split("");

		/**
		 * Duplicate the values, to make the code have length of six
		 */
		const colorWithLengthSix = [
			colorSplitted[0],
			colorSplitted[0],
			colorSplitted[1],
			colorSplitted[1],
			colorSplitted[2],
			colorSplitted[2],
		];

		return colorWithLengthSix.join("");
	}

	return color;
};

export const getColorLuma = (color: string) => {
	const colorWithOutHashtag = color.substring(1);

	const colorWithLengthSix = getColorWithCorrectLength(colorWithOutHashtag);

	const rgb = parseInt(colorWithLengthSix, 16);

	const r = (rgb >> 16) & 0xff;
	const g = (rgb >> 8) & 0xff;
	const b = (rgb >> 0) & 0xff;

	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma;
};
