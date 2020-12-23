import { makeFunction } from "checks/helpers";

const IS_SIMPLE_USERNAME = /^[a-zA-Z0-9_-]{3,16}$/;
export const isSimpleUsername = makeFunction({
  regex: IS_SIMPLE_USERNAME,
});
