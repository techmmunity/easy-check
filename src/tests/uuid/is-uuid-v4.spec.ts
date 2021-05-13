import { isUUIDv4 } from "checks/uuid/is-uuid-v4";

/**
 *
 * True
 *
 */

describe("is UUID (return True)", () => {
	it("with valid UUID (v4) - 1", () => {
		const result = isUUIDv4("24bd85a1-4eb7-4f63-829e-75c08ac2b6c0");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 2", () => {
		const result = isUUIDv4("9704f84d-b593-4c99-852c-7b20b916942f");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 3", () => {
		const result = isUUIDv4("0f5416bc-2b95-4470-8d46-2c7e139b4a1e");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 4", () => {
		const result = isUUIDv4("79259b67-7aa7-4c3d-83b1-40fcd930b0be");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 5", () => {
		const result = isUUIDv4("296d1e58-458f-43e2-8d66-4867b6720fc7");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 6", () => {
		const result = isUUIDv4("feb9edb9-c021-46a7-9592-c4888e7c3fae");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 7", () => {
		const result = isUUIDv4("c224cd67-ccdf-4e8f-b8cd-f69a07c7939f");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 8", () => {
		const result = isUUIDv4("24456855-1661-42dc-b662-325c0a1e23df");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 9", () => {
		const result = isUUIDv4("77590392-145c-4a1b-aece-3cc20391201f");
		expect(result).toBe(true);
	});

	it("with valid UUID (v4) - 10", () => {
		const result = isUUIDv4("1230bec2-3bd2-4557-aec3-cee2b01aa060");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("is UUID (return False)", () => {
	it("with invalid UUID (v1)", () => {
		const result = isUUIDv4("24bd85a1-4eb7-4f63-829e-75c08ac2b6t1");
		expect(result).toBe(false);
	});

	it("with invalid UUID (v2)", () => {
		const result = isUUIDv4("e7f019ea-4d52-11eb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the first part (less)", () => {
		const result = isUUIDv4("e7f019e-4d52-11eb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the first part (more)", () => {
		const result = isUUIDv4("e7f019eaa-4d52-11eb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the second part (less)", () => {
		const result = isUUIDv4("e7f019ea-4d5-11eb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the second part (more)", () => {
		const result = isUUIDv4("e7f019ea-4d522-11eb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the third part (less)", () => {
		const result = isUUIDv4("e7f019ea-4d52-11e-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the third part (more)", () => {
		const result = isUUIDv4("e7f019ea-4d52-11ebb-ae93");
		expect(result).toBe(false);
	});

	it("with wrong length at the last part (less)", () => {
		const result = isUUIDv4("e7f019ea-4d52-11eb-ae9");
		expect(result).toBe(false);
	});

	it("with wrong length at the last part (more)", () => {
		const result = isUUIDv4("e7f019ea-4d52-11eb-ae933");
		expect(result).toBe(false);
	});
});
