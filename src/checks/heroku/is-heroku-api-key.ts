import { makeFunction } from "helpers/make-function";

const IS_HEROKU_API_KEY =
	/^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/;
/**
 * Check if a string is a heroku API key
 */
export const isHerokuApiKey = makeFunction<string>({
	regex: IS_HEROKU_API_KEY,
});
