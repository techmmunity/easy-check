const IS_SSN = /^((?<area>[\d]{3})[-][\d]{2}[-][\d]{4})$/;
export const isSSN = (str: string) => IS_SSN.test(str);
