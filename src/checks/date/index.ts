import { makeFunction } from "../helpers";
import { isDate } from "./helpers";

export const isDateDMYS = makeFunction({
  func: (str: string) => isDate(str, "DMY", "/"),
});

export const isDateDMY = makeFunction({
  func: (str: string) => isDate(str, "DMY", "-"),
});

export const isDateYMDS = makeFunction({
  func: (str: string) => isDate(str, "YMD", "/"),
});

export const isDateYMD = makeFunction({
  func: (str: string) => isDate(str, "YMD", "-"),
});

export const isDateMDYS = makeFunction({
  func: (str: string) => isDate(str, "MDY", "/"),
});

export const isDateMDY = makeFunction({
  func: (str: string) => isDate(str, "MDY", "-"),
});

export const isLeap = makeFunction({
  func: (year: string) => new Date(parseInt(year), 1, 29).getMonth() === 1,
});
