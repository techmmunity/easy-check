const IS_IPV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
export const isIpv4 = (str: string) => IS_IPV4.test(str);

const IS_IPV4_WITH_MASK = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}\/\d+$/;
export const isIpv4WithMask = (str: string) => IS_IPV4_WITH_MASK.test(str);
