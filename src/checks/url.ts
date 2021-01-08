import { makeFunction } from "checks/helpers";

const IS_URL = /^(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*$/;
export const isUrl = makeFunction({
	regex: IS_URL,
});

const HAS_URL = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[^\s/]*\.\S*/;
export const hasUrl = makeFunction({
	regex: HAS_URL,
});
