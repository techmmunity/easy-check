import { isEmail } from "checks/email";
import { isEmoji, hasEmojis } from "checks/emoji";
import { isHexColor } from "checks/hex";
import { hasHtmlTags } from "checks/html";
import { isIpv4 } from "checks/ip";
import { isStrongPassword } from "checks/password";
import { isSSN } from "checks/ssn";
import { isSimpleUsername } from "checks/username";

export default {
  isEmail,
  isEmoji,
  hasEmojis,
  isHexColor,
  hasHtmlTags,
  isIpv4,
  isStrongPassword,
  isSSN,
  isSimpleUsername,
};
