import { makeFunction } from "checks/helpers";

const IS_HEX_COLOR = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export const isHexColor = makeFunction({
  regex: IS_HEX_COLOR,
});
