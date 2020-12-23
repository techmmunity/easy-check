import { isIpv4 } from "checks/ip";

/**
 *
 * True
 *
 */

describe("isIpv4 (return True)", () => {
  it("valid IPV4 > 1-1-1-1", () => {
    const result = isIpv4("0.0.0.0");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 2-3-1-3", () => {
    const result = isIpv4("91.204.5.133");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 2-3-3-2", () => {
    const result = isIpv4("74.200.196.55");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 2-3-3-3", () => {
    const result = isIpv4("77.227.249.182");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-1-3-2", () => {
    const result = isIpv4("164.4.192.15");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-2-2-3", () => {
    const result = isIpv4("118.50.48.150");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-2-3-2", () => {
    const result = isIpv4("202.38.163.19");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-2-3-3", () => {
    const result = isIpv4("177.68.210.206");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-3-2-2", () => {
    const result = isIpv4("159.141.24.25");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-3-3-1", () => {
    const result = isIpv4("191.220.151.10");
    expect(result).toBe(true);
  });

  it("valid IPV4 > 3-3-3-3", () => {
    const result = isIpv4("140.214.219.234");
    expect(result).toBe(true);
  });
});

/**
 *
 * False
 *
 */

describe("isIpv4 (return False)", () => {
  it("with letters", () => {
    const result = isIpv4("foo.bar.foo.bar");
    expect(result).toBe(false);
  });

  it("with invalid ip", () => {
    const result = isIpv4("300.251.0.1");
    expect(result).toBe(false);
  });
});
