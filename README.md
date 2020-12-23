# Techmmunity - EasyCheck

[![npm](https://img.shields.io/npm/v/@techmmunity/easy-check.svg?color=2ba097)](https://www.npmjs.com/package/@techmmunity/easy-check) <space> [![Coverage Status](https://coveralls.io/repos/github/Techmmunity/easy-check/badge.svg?branch=master)](https://coveralls.io/github/Techmmunity/easy-check?branch=master) <space> [![Tests](https://github.com/Techmmunity/easy-check/workflows/tests/badge.svg)]() <space> [![Downloads](https://img.shields.io/npm/dw/@techmmunity/easy-check.svg)](https://www.npmjs.com/package/@techmmunity/easy-check)

EasyCheck is a light-weigth library to check things that a lot of projects needs to check, like **email**, **username**, **phone**, and many more validations.

## Install

With Yarn:

```sh
yarn add @techmmunity/easy-check
```

With NPM:

```sh
npm i @techmmunity/easy-check
```

## Usage

With TypeScript:

```ts
import { EasyCheck } from "@techmmunity/easy-check";

if (EasyCheck.isEmail("example@email.com")) {
  console.log("Yes, it's an email!");
}
```

With JavaScript:

```js
const { EasyCheck } = require("@techmmunity/easy-check");

if (EasyCheck.isEmail("example@email.com")) {
  console.log("Yes, it's an email!");
}
```

## Methods

You can find more information about the methods in the comments of the methods declaration.

| Method              | How To Use                                                         |
| ------------------- | ------------------------------------------------------------------ |
| `isEmail`           | `EasyCheck.isEmail("example@email.com")`                           |
| `isEmoji`           | `EasyCheck.isEmoji("😂")`                                          |
| `hasEmojis`         | `EasyCheck.hasEmojis("Yes, there is emojis here 😂")`              |
| `isHerokuApiKey`    | `EasyCheck.isHerokuApiKey("625628d3-8a45-466e-a55e-ead5c6886887")` |
| `isHexColor`        | `EasyCheck.isHexColor("#000")`                                     |
| `hasHtmlTags`       | `EasyCheck.hasHtmlTags("Foo <b>Bar</b>")`                          |
| `isIpv4`            | `EasyCheck.isIpv4("192.168.1.1")`                                  |
| `isIpv4WithMask`    | `EasyCheck.isIpv4WithMask("192.168.1.1/24")`                       |
| `isStrongPassword`  | `EasyCheck.isStrongPassword("$t0ngP@ssw0rD")`                      |
| `isBrazillianPhone` | `EasyCheck.isBrazillianPhone("2199999999")`                        |
| `isRegex`           | `EasyCheck.isRegex("/[a-Z]{3,}/")`                                 |
| `isSimpleUsername`  | `EasyCheck.isSimpleUsername("user-name")`                          |
