import { makeFunction } from "checks/helpers";

const IS_STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*#?&]{6,24}$/;
export const isStrongPassword = makeFunction({
	regex: IS_STRONG_PASSWORD,
});
