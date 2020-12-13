const IS_STRONG_PASSWORD = /^(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&/()?^'\\+\-*]))^.*$/;
export const isStrongPassword = (str: string) => IS_STRONG_PASSWORD.test(str);
