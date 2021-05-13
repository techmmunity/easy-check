import { makeFunction } from "helpers/make-function";

const HAS_HTML_TAGS = /<[^>]{1,}>/;
/**
 * Check if has html tags in a string
 */
export const hasHtmlTags = makeFunction<string>({
	regex: HAS_HTML_TAGS,
});
