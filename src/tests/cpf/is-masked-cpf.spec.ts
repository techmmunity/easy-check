import { isMaskedCPF } from "checks/cpf";

/**
 *
 * True
 *
 */

describe("isMaskedCPF (return True)", () => {
	it("with valid cpf", () => {
		const result = isMaskedCPF("553.573.140-47");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isMaskedCPF("801.583.970-02");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isMaskedCPF("576.099.990-75");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isMaskedCPF("974.973.270-70");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isMaskedCPF("885.411.130-94");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isMaskedCPF (return False)", () => {
	it("with unmasked cpf", () => {
		const result = isMaskedCPF("55357314047");
		expect(result).toBe(false);
	});

	it("with invalid cpf", () => {
		const result = isMaskedCPF("000.000.000-00");
		expect(result).toBe(false);
	});

	it("with invalid cpf", () => {
		const result = isMaskedCPF("885.411.130-95");
		expect(result).toBe(false);
	});
});
