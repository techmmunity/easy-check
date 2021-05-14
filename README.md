# Techmmunity Easy Check

[![CodeFactor](https://www.codefactor.io/repository/github/techmmunity/easy-check/badge)](https://www.codefactor.io/repository/github/techmmunity/easy-check)
[![DeepScan grade](https://deepscan.io/api/teams/13883/projects/17164/branches/385798/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13883&pid=17164&bid=385798)
[![Coverage Status](https://coveralls.io/repos/github/Techmmunity/easy-check/badge.svg?branch=master)](https://coveralls.io/github/Techmmunity/easy-check?branch=master)
[![tests](https://github.com/Techmmunity/easy-check/workflows/coverage/badge.svg)]()
[![npm](https://img.shields.io/npm/v/@techmmunity/easy-check.svg?color=CC3534)](https://www.npmjs.com/package/@techmmunity/easy-check)
[![Downloads](https://img.shields.io/npm/dw/@techmmunity/easy-check.svg)](https://www.npmjs.com/package/@techmmunity/easy-check)

All projects that involve programming work with data at some level, and the most worrying thing about that data is its reliability.

If any data on your system is outside the expected and accepted standard, this can generate unforeseen bugs, which will give you a lot of headaches.

With that in mind, we created **Techmmunity Easy Check**, a simple library that seeks to solve all your problems with validation.

Our main goals with this lib:

- **ZERO** dependencies (there's no blind spot, you can see exactly how it's being validated)
- Extremely intuitive
- Highly reliable
- Highly predictable (each method returns `true` or `false`, there's no third path)

[![Discord Badge](https://img.shields.io/badge/join%20our%20community-7289DA?style=for-the-badge&labelColor=7289DA&logo=discord&logoColor=white)](https://discord.gg/qCJXz6P4qw)

## Install

With Yarn:

```sh
yarn add @techmmunity/easy-check
```

With NPM:

```sh
npm i @techmmunity/easy-check
```

## Upgrading

#### 2.x > 3.x

The easier way to upgrade to version 3.x, is changing the import method, like this:

```ts
// 2.x:
import { check } from "@techmmunity/easy-check";

// 3.x:
import * as check from "@techmmunity/easy-check";
```

## Usage

```ts
import { isEmail } from "@techmmunity/easy-check";

if (isEmail("example@email.com")) {
	// ...
}
```

## How to contribute?

All the details about contributing to the project are [described here](https://github.com/techmmunity/easy-check/blob/master/CONTRIBUTING.md).

## Methods - Table Format

### Strings

| Method              | How To Use                                               |
| ------------------- | -------------------------------------------------------- |
| `isCPF`             | `isCPF("55357314047")`                                   |
| `isMaskedCPF`       | `isMaskedCPF("553.573.140-47")`                          |
| `isEmail`           | `isEmail("example@email.com")`                           |
| `isEmoji`           | `isEmoji("😂")`                                          |
| `hasEmojis`         | `hasEmojis("Yes, there is emojis here 😂")`              |
| `isHerokuApiKey`    | `isHerokuApiKey("625628d3-8a45-466e-a55e-ead5c6886887")` |
| `isHexColor`        | `isHexColor("#000")`                                     |
| `hasHtmlTags`       | `hasHtmlTags("Foo <b>Bar</b>")`                          |
| `isIpv4`            | `isIpv4("192.168.1.1")`                                  |
| `isIpv4WithMask`    | `isIpv4WithMask("192.168.1.1/24")`                       |
| `isStrongPassword`  | `isStrongPassword("$t0ngP@ssw0rD")`                      |
| `isBrazillianPhone` | `isBrazillianPhone("2199999999")`                        |
| `isUrl`             | `isUrl("https://google.com")`                            |
| `hasUrl`            | `hasUrl("foo bar https://google.com foo bar")`           |
| `isSimpleUsername`  | `isSimpleUsername("foo-bar")`                            |
| `isUUIDv4`          | `isUUIDv4("24bd85a1-4eb7-4f63-829e-75c08ac2b6c0")`       |

### Numbers

| Method   | How To Use  |
| -------- | ----------- |
| `isEven` | `isEven(2)` |
| `isOdd`  | `isOdd(1)`  |

### Dates

| Method       | How To Use                 |
| ------------ | -------------------------- |
| `isDateDMY`  | `isDateDMY("31-01-2020")`  |
| `isDateDMYS` | `isDateDMYS("31/01/2020")` |
| `isDateMDY`  | `isDateMDY("01-31-2020")`  |
| `isDateMDYS` | `isDateMDYS("01/31/2020")` |
| `isDateYMD`  | `isDateYMD("2020-01-31")`  |
| `isDateYMDS` | `isDateYMDS("2020/01/31")` |
| `isLeap`     | `isLeap("2020")`           |

## Methods - Detailed Description

### Strings

#### isCpf

Check if the string is a CPF (brazzilian federal tax id).

```ts
import { isCpf } from "@techmmunity/easy-check";

if (isCpf("55357314047")) {
	// ...
}
```

#### isMaskedCpf

Check if the string is a masked CPF (brazzilian federal tax id).

```ts
import { isMaskedCpf } from "@techmmunity/easy-check";

if (isMaskedCpf("553.573.140-47")) {
	// ...
}
```

#### isEmail

Check if the string is a valid email.

```ts
import { isEmail } from "@techmmunity/easy-check";

if (isEmail("example@email.com")) {
	// ...
}
```

#### isEmoji

Check if the string is an emoji.

```ts
import { isEmoji } from "@techmmunity/easy-check";

if (isEmoji("😂")) {
	// ...
}
```

#### hasEmoji

Check if the string has at least one emoji.

```ts
import { hasEmoji } from "@techmmunity/easy-check";

if (hasEmoji("Yes, there is emojis here 😂")) {
	// ...
}
```

#### isHerokuApiKey

Check if the string is in the heroku api key format.

**Alert:** This doens't validates if the api key is valid! Only if it's on the correct format.

```ts
import { isHerokuApiKey } from "@techmmunity/easy-check";

if (isHerokuApiKey("625628d3-8a45-466e-a55e-ead5c6886887")) {
	// ...
}
```

#### isHexColor

Check if the string is a color in hex format.

```ts
import { isHexColor } from "@techmmunity/easy-check";

if (isHexColor("#000") || isHexColor("#000000")) {
	// ...
}
```

#### hasHtmlTags

Check if the string contains html tags like.

**Alert:** This doens't validates if the html tags are valid! Only if there is something that look likes a html tag.

```ts
import { hasHtmlTags } from "@techmmunity/easy-check";

if (hasHtmlTags("Foo <b>Bar</b>")) {
	// ...
}
```

#### isIpv4

Check if the string is a valid ipv4.

```ts
import { isIpv4 } from "@techmmunity/easy-check";

if (isIpv4("192.168.1.1")) {
	// ...
}
```

#### isIpv4WithMask

Check if the string is a valid ipv4 with mask.

```ts
import { isIpv4WithMask } from "@techmmunity/easy-check";

if (isIpv4WithMask("192.168.1.1/24")) {
	// ...
}
```

#### isStrongPassword

Check if the string is a strong password.

- At least 6 characters
- At most 100 characters
- At least one Uppercase
- At least one Lowercase
- At least one Number
- At least one of `@#$!%\*?&`

```ts
import { isStrongPassword } from "@techmmunity/easy-check";

if (isStrongPassword("$t0ngP@ssw0rD")) {
	// ...
}
```

#### isBrazillianPhone

Check if the string is a valid brazzilian phone.

**Alert:** It doesn't validates if the phone existis or if it's really valid, just if it's in the correct format, includind validation by DDD.

```ts
import { isBrazillianPhone } from "@techmmunity/easy-check";

if (isBrazillianPhone("19999904610")) {
	// ...
}
```

#### isUrl

Check if the string is a valid url.

```ts
import { isUrl } from "@techmmunity/easy-check";

if (isUrl("https://google.com")) {
	// ...
}
```

#### hasUrl

Check if the string has a valid url.

```ts
import { hasUrl } from "@techmmunity/easy-check";

if (hasUrl("foo bar https://google.com foo bar")) {
	// ...
}
```

#### isSimpleUsername

Check if the string is a valid username.

- 3 to 16 characters
- Lower And Upper case allowed
- Allows only aplhanumeric and `-` and `_`

```ts
import { isSimpleUsername } from "@techmmunity/easy-check";

if (isSimpleUsername("foo-bar")) {
	// ...
}
```

#### isUUIDv4

Check if the string is a valid uuid v4.

```ts
import { isUUIDv4 } from "@techmmunity/easy-check";

if (isUUIDv4("24bd85a1-4eb7-4f63-829e-75c08ac2b6c0")) {
	// ...
}
```

### Numbers

#### isEven

Check if a number is even (divisible by 2).

```ts
import { isEven } from "@techmmunity/easy-check";

if (isEven(2)) {
	// ...
}
```

#### isEven

Check if a number is odd (NOT divisible by 2).

```ts
import { isEven } from "@techmmunity/easy-check";

if (isOdd(3)) {
	// ...
}
```

### Dates

#### isDateDMY

Check if the string is a date in the DD-MM-YYYY format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateDMY } from "@techmmunity/easy-check";

if (isDateDMY("31-01-2020")) {
	// ...
}
```

#### isDateDMYS

Check if the string is a date in the DD/MM/YYYY format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateDMYS } from "@techmmunity/easy-check";

if (isDateDMYS("31/01/2020")) {
	// ...
}
```

#### isDateMDY

Check if the string is a date in the MM-DD-YYYY format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateMDY } from "@techmmunity/easy-check";

if (isDateMDY("01-31-2020")) {
	// ...
}
```

#### isDateMDYS

Check if the string is a date in the MM/DD/YYYY format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateMDYS } from "@techmmunity/easy-check";

if (isDateMDYS("01/31/2020")) {
	// ...
}
```

#### isDateYMD

Check if the string is a date in the YYYY-MM-DD format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateYMD } from "@techmmunity/easy-check";

if (isDateYMD("2020-01-31")) {
	// ...
}
```

#### isDateYMDS

Check if the string is a date in the YYYY/MM/DD format.

**Bonus:** This validates if it's a valid date too!

```ts
import { isDateYMDS } from "@techmmunity/easy-check";

if (isDateYMDS("2020/01/31")) {
	// ...
}
```

#### isLeap

Check if the string or the number is leap year (year with February 29).

```ts
import { isLeap } from "@techmmunity/easy-check";

if (isLeap("2020") || isLeap(2020)) {
	// ...
}
```
