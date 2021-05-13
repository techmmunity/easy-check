import { makeFunction } from "helpers/make-function";

const IS_IPV4_WITH_MASK = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}\/\d+$/;
/**
 * Check if a string is an ipv4 with mask
 * - 192.168.1.1/24
 */
export const isIpv4WithMask = makeFunction<string>({
	regex: IS_IPV4_WITH_MASK,
});
