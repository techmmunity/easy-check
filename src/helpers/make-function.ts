interface IParams<T> {
	regex?: RegExp;
	func?: (str: T) => boolean;
}

export const makeFunction = <T>({ regex, func }: IParams<T>) => (value: T) => {
	try {
		if (regex && typeof value === "string") {
			return regex.test(value);
		}

		if (func) {
			return func(value);
		}

		return false;
	} catch (e) {
		return false;
	}
};
