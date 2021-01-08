interface IParams {
	regex?: RegExp;
	func?: (str: string) => boolean;
}

export const makeFunction = ({ regex, func }: IParams) => (str: string) => {
	try {
		if (typeof str !== "string") return false;

		if (regex) {
			return regex.test(str);
		} else if (func) {
			return func(str);
		}
	} catch (e) {
		return false;
	}

	throw new Error("INVALID_VALIDATION");
};
