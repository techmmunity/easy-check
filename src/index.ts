import { isEmail } from "checks/email";
import { isEmoji, hasEmojis } from "checks/emoji";
import { isHerokuApiKey } from "checks/heroku";
import { isHexColor } from "checks/hex";
import { hasHtmlTags } from "checks/html";
import { isIpv4, isIpv4WithMask } from "checks/ip";
import { isStrongPassword } from "checks/password";
import { isBrazillianPhone } from "checks/phone";
import { isRegex } from "checks/regex";
import { isSimpleUsername } from "checks/username";

export const EasyCheck = {
  /**
   * Check if a string is an email
   */
  isEmail,
  /**
   * Check if a string is an emoji
   */
  isEmoji,
  /**
   * Check if has emojis in a string
   */
  hasEmojis,
  /**
   * Check if a string is a heroku API key
   */
  isHerokuApiKey,
  /**
   * Check if a string is a hex color
   */
  isHexColor,
  /**
   * Check if has html tags in a string
   */
  hasHtmlTags,
  /**
   * Check if a string is an ipv4
   * - 192.168.1.1
   */
  isIpv4,
  /**
   * Check if a string is an ipv4 with mask
   * - 192.168.1.1/24
   */
  isIpv4WithMask,
  /**
   * Check if a string is a strong password
   * - At least 6 characters
   * - At least one Uppercase
   * - At least one Lowercase
   * - At least one Number
   * - At least one Special Character
   */
  isStrongPassword,
  /**
   * Check if a string is a clean Brazillian Phone (With Valid DD)
   * - 19999904610
   * - 2199999999
   */
  isBrazillianPhone,
  /**
   * Check if a string is a valid regex
   * - /^[0-9]{,3}$/
   * - /^[0-9]{,3}$/gi
   */
  isRegex,
  /**
   * Check if a string is a simple username
   * - 3 to 6 characters
   * - Lower Ans Uper case allowed
   * - NO Special Characters, only `-` and `_`
   */
  isSimpleUsername,
};
