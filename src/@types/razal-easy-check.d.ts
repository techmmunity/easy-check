declare module "@razal/easy-check" {
  declare const RazalEasyCheck: {
    /**
     * Check if a string is an email
     */
    isEmail(str: string): boolean;
    isOnlyOneEmoji(str: string): boolean;
    hasEmojis(str: string): boolean;
    isHex(str: string): boolean;
    hasHtmlTags(str: string): boolean;
    isIpv4(str: string): boolean;
    isStrongPassword(str: string): boolean;
    isSSN(str: string): boolean;
    isSimpleUsername(str: string): boolean;
  };

  export default RazalEasyCheck;
}
