const HAS_HTML_TAGS = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gm;
export const hasHtmlTags = (str: string) => HAS_HTML_TAGS.test(str);
