const IS_HEX_COLOR = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export const isHexColor = (str: string) => IS_HEX_COLOR.test(str);
