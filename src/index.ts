import { isEmail } from "checks/email";
import { isEmoji, hasEmojis } from "checks/emoji";
import { isHerokuApiKey } from "checks/heroku";
import { isHexColor } from "checks/hex";
import { hasHtmlTags } from "checks/html";
import { isStrongPassword } from "checks/password";
import { isBrazillianPhone } from "checks/phone";
import { isRegex } from "checks/regex";
import { isSimpleUsername } from "checks/username";

export default {
  isEmail,
  isEmoji,
  hasEmojis,
  isHerokuApiKey,
  isHexColor,
  hasHtmlTags,
  isStrongPassword,
  isBrazillianPhone,
  isRegex,
  isSimpleUsername,
};
