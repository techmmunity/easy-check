const HAS_HTML_TAGS = /<[^>]{1,}>/;
export const hasHtmlTags = (str: string) => HAS_HTML_TAGS.test(str);
