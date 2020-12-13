const IS_HEX = /^\B#(?:[a-fA-F0–9]{6}|[a-fA-F0–9]{3})\b$/g;
export const isHex = (str: string) => IS_HEX.test(str);
