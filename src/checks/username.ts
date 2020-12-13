const IS_SIMPLE_USERNAME = /^[a-z0-9_-]{3,16}$/;
export const isSimpleUsername = (str: string) => IS_SIMPLE_USERNAME.test(str);
