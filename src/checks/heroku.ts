const IS_HEROKU_API_KEY = /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/;
export const isHerokuApiKey = (str: string) => IS_HEROKU_API_KEY.test(str);
