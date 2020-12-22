declare module "@techmmunity/easy-check" {
  declare const TechmmunityEasyCheck: {
    /**
     * Check if a string is an email
     */
    isEmail(str: string): boolean;
    /**
     * Check if a string is an emoji
     */
    isEmoji(str: string): boolean;
    /**
     * Check if has emojis in a string
     */
    hasEmojis(str: string): boolean;
    /**
     * Check if a string is a hex color
     */
    isHexColor(str: string): boolean;
    /**
     * Check if has html tags in a string
     */
    hasHtmlTags(str: string): boolean;
    /**
     * Check if a string is an ipv4
     */
    isIpv4(str: string): boolean;
    /**
     * Check if a string is a strong password
     * - At least 6 characters
     * - At least one Uppercase
     * - At least one Lowercase
     * - At least one Number
     * - At least one Special Character
     */
    isStrongPassword(str: string): boolean;
    /**
     * Check if a string is a simple username
     * - 3 to 6 characters
     * - Lower Ans Uper case allowed
     * - NO Special Characters, only `-` and `_`
     */
    isSimpleUsername(str: string): boolean;
  };

  export default TechmmunityEasyCheck;
}
