import { isHerokuApiKey } from "checks/heroku";

/**
 *
 * True
 *
 */

describe("isHerokuApiKey (return True)", () => {
	it("with heroku generated API key 1", () => {
		const result = isHerokuApiKey("625628d3-8a45-466e-a55e-ead5c6886887");
		expect(result).toBe(true);
	});

	it("with heroku generated API key 2", () => {
		const result = isHerokuApiKey("b3222d6a-4732-4292-9d28-b72f87cbf563");
		expect(result).toBe(true);
	});

	it("with heroku generated API key 3", () => {
		const result = isHerokuApiKey("740a93e4-c7ec-4b11-a443-19af31bc313f");
		expect(result).toBe(true);
	});

	it("with heroku generated API key 4", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ffa");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isHerokuApiKey (return False)", () => {
	it("with special character at the first part", () => {
		const result = isHerokuApiKey("84425c6&-d173-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with special character at the second part", () => {
		const result = isHerokuApiKey("84425c67-d17)-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with special character at the third part", () => {
		const result = isHerokuApiKey("84425c67-d173-4#cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with special character at the forth part", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-942$-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with special character at the last part", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ff@");
		expect(result).toBe(false);
	});

	it("with wrong length at first part (less)", () => {
		const result = isHerokuApiKey("84425c6-d173-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at first part (more)", () => {
		const result = isHerokuApiKey("84425c677-d173-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at second part (less)", () => {
		const result = isHerokuApiKey("84425c67-d17-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at second part (more)", () => {
		const result = isHerokuApiKey("84425c67-d1733-40cb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at third part (less)", () => {
		const result = isHerokuApiKey("84425c67-d173-40c-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at third part (more)", () => {
		const result = isHerokuApiKey("84425c67-d173-40cbb-9424-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at fourth part (less)", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-942-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at fourth part (more)", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-94244-ce469d910ffa");
		expect(result).toBe(false);
	});

	it("with wrong length at last part (less)", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ff");
		expect(result).toBe(false);
	});

	it("with wrong length at last part (more)", () => {
		const result = isHerokuApiKey("84425c67-d173-40cb-9424-ce469d910ffaa");
		expect(result).toBe(false);
	});
});
