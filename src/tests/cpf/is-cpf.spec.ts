import { isCPF } from "checks/cpf/is-cpf";

/**
 *
 * True
 *
 */

describe("isCPF (return True)", () => {
	it("with valid cpf", () => {
		const result = isCPF("55357314047");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isCPF("80158397002");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isCPF("57609999075");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isCPF("97497327070");
		expect(result).toBe(true);
	});

	it("with valid cpf", () => {
		const result = isCPF("88541113094");
		expect(result).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isCPF (return False)", () => {
	it("with masked cpf", () => {
		const result = isCPF("553.573.140-47");
		expect(result).toBe(false);
	});

	it("with invalid cpf", () => {
		const result = isCPF("00000000000");
		expect(result).toBe(false);
	});

	it("with invalid cpf", () => {
		const result = isCPF("88541113095");
		expect(result).toBe(false);
	});
});
