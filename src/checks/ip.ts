const IS_IPV4 = /^\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b/;
export const isIpv4 = (str: string) => IS_IPV4.test(str);
