import { isIpv4WithMask } from "checks/ip/is-ipv4-with-mask";

/**
 *
 * True
 *
 */

describe("isIpv4WithMask (return True)", () => {
	it("valid IPV4 With mask (Class C > 3-3-3-0/24)", () => {
		const result = isIpv4WithMask("255.255.255.0/24");
		expect(result).toBe(true);
	});

	it("valid IPV4 With mask (Class B > 3-3-0-0/16)", () => {
		const result = isIpv4WithMask("255.255.0.0/16");
		expect(result).toBe(true);
	});

	it("valid IPV4 With mask (Class a > 3-0-0-0/8)", () => {
		const result = isIpv4WithMask("255.0.0.0/8");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isIpv4WithMask (return False)", () => {
	it("with letters", () => {
		const result = isIpv4WithMask("foo.bar.foo.bar");
		expect(result).toBe(false);
	});

	it("with invalid ip", () => {
		const result = isIpv4WithMask("300.251.0.1");
		expect(result).toBe(false);
	});
});
