# Techmmunity Easy Check

[![CodeFactor](https://www.codefactor.io/repository/github/techmmunity/easy-check/badge)](https://www.codefactor.io/repository/github/techmmunity/easy-check)
[![DeepScan grade](https://deepscan.io/api/teams/13883/projects/17164/branches/385798/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13883&pid=17164&bid=385798)
[![Coverage Status](https://coveralls.io/repos/github/Techmmunity/easy-check/badge.svg?branch=master)](https://coveralls.io/github/Techmmunity/easy-check?branch=master)
[![tests](https://github.com/Techmmunity/easy-check/workflows/coverage/badge.svg)]()
[![npm](https://img.shields.io/npm/v/@techmmunity/easy-check.svg?color=CC3534)](https://www.npmjs.com/package/@techmmunity/easy-check)
[![Downloads](https://img.shields.io/npm/dw/@techmmunity/easy-check.svg)](https://www.npmjs.com/package/@techmmunity/easy-check)

Techmmunity Easy-Check is a library to check **ALL** the things that a lot of projects need to check, like **email**, **username**, **phone** and **many, many more** validations.

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

## Upgrading from 2.x to 3.x

The most easy way to upgrade, is just changing the import.

2.x:

```ts
import { check } from "@techmmunity/easy-check";
```

3.x:

```ts
import * as check from "@techmmunity/easy-check";
```

## Usage

With TypeScript:

```ts
import { isEmail } from "@techmmunity/easy-check";

if (isEmail("example@email.com")) {
	console.log("Yes, it's an email!");
}
```

or

```ts
import * as check from "@techmmunity/easy-check";

if (check.isEmail("example@email.com")) {
	console.log("Yes, it's an email!");
}
```

With JavaScript:

```js
const { isEmail } = require("@techmmunity/easy-check");

if (isEmail("example@email.com")) {
	console.log("Yes, it's an email!");
}
```

## How to contribute?

All the details about contributing to the project are [described here](https://github.com/techmmunity/easy-check/blob/master/CONTRIBUTING.md).

## Methods

You can find more information about the methods in the comments of the methods declaration.

#### Strings

| Method              | How To Use                                               |
| ------------------- | -------------------------------------------------------- |
| `isCPF`             | `isCPF("55357314047")`                                   |
| `isMaskedCPF`       | `isMaskedCPF("553.573.140-47")`                          |
| `isDateDMY`         | `isDateDMY("31-01-2020")`                                |
| `isDateDMYS`        | `isDateDMYS("31/01/2020")`                               |
| `isDateMDY`         | `isDateMDY("01-31-2020")`                                |
| `isDateMDYS`        | `isDateMDYS("01/31/2020")`                               |
| `isDateYMD`         | `isDateYMD("2020-01-31")`                                |
| `isDateYMDS`        | `isDateYMDS("2020/01/31")`                               |
| `isLeap`            | `isLeap("2020")`                                         |
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
| `isSimpleUsername`  | `isSimpleUsername("user-name")`                          |
| `isUUIDv4`          | `isUUIDv4("24bd85a1-4eb7-4f63-829e-75c08ac2b6c0")`       |

#### Numbers

| Method   | How To Use  |
| -------- | ----------- |
| `isEven` | `isEven(2)` |
| `isOdd`  | `isOdd(1)`  |
