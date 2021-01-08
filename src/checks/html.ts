import { makeFunction } from "checks/helpers";

const HAS_HTML_TAGS = /<[^>]{1,}>/;
export const hasHtmlTags = makeFunction({
	regex: HAS_HTML_TAGS,
});
