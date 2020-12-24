import {
  isDateDMY,
  isDateDMYS,
  isDateMDY,
  isDateMDYS,
  isDateYMD,
  isDateYMDS,
  isLeap,
} from "checks/date";
import { isEmail } from "checks/email";
import { isEmoji, hasEmojis } from "checks/emoji";
import { isHerokuApiKey } from "checks/heroku";
import { isHexColor } from "checks/hex";
import { hasHtmlTags } from "checks/html";
import { isIpv4, isIpv4WithMask } from "checks/ip";
import { isStrongPassword } from "checks/password";
import { isBrazillianPhone } from "checks/phone";
import { isUrl, hasUrl } from "checks/url";
import { isSimpleUsername } from "checks/username";

export const check = {
  /**
   * Check if a string is an valid date format
   * - 31-01-2020
   */
  isDateDMY,
  /**
   * Check if a string is an valid date format
   * - 31/01/2020
   */
  isDateDMYS,
  /**
   * Check if a string is an valid date format
   * - 01-31-2020
   */
  isDateMDY,
  /**
   * Check if a string is an valid date format
   * - 01/31/2020
   */
  isDateMDYS,
  /**
   * Check if a string is an valid date format
   * - 2020-01-31
   */
  isDateYMD,
  /**
   * Check if a string is an valid date format
   * - 2020/01/31
   */
  isDateYMDS,
  /**
   * Check if a string is an leap year
   */
  isLeap,
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
   * Check if a string is an url
   * - https://google.com
   * - http://localhost:9090
   * - www.google.com
   */
  isUrl,
  /**
   * Check if has urls in the string
   * - https://google.com
   * - http://localhost:9090
   * - www.google.com
   */
  hasUrl,
  /**
   * Check if a string is a simple username
   * - 3 to 6 characters
   * - Lower Ans Uper case allowed
   * - NO Special Characters, only `-` and `_`
   */
  isSimpleUsername,
};
