const IS_STRONG_PASSWORD = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/;
export const isStrongPassword = (str: string) => IS_STRONG_PASSWORD.test(str);
