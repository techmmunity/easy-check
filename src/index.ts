import { isEmail } from "checks/email";
import { isOnlyOneEmoji, hasEmojis } from "checks/emoji";
import { isHex } from "checks/hex";
import { hasHtmlTags } from "checks/html";
import { isIpv4 } from "checks/ip";
import { isStrongPassword } from "checks/password";
import { isSSN } from "checks/ssn";
import { isSimpleUsername } from "checks/username";

export default {
  isEmail,
  isOnlyOneEmoji,
  hasEmojis,
  isHex,
  hasHtmlTags,
  isIpv4,
  isStrongPassword,
  isSSN,
  isSimpleUsername,
};
