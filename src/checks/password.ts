import { makeFunction } from "checks/helpers";

const IS_STRONG_PASSWORD = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/;
export const isStrongPassword = makeFunction({
  regex: IS_STRONG_PASSWORD,
});
