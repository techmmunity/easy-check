import { isCPF } from "checks/cpf/is-cpf";

/**
 *
 * True
 *
 */

describe("isCPF (return True)", () => {
	it("with valid cpf (1)", () => {
		expect(isCPF("55357314047")).toBe(true);
	});

	it("with valid cpf (2)", () => {
		expect(isCPF("80158397002")).toBe(true);
	});

	it("with valid cpf (3)", () => {
		expect(isCPF("57609999075")).toBe(true);
	});

	it("with valid cpf (4)", () => {
		expect(isCPF("97497327070")).toBe(true);
	});

	it("with valid cpf (5)", () => {
		expect(isCPF("88541113094")).toBe(true);
	});
});

/**
 *
 * False
 *
 */

describe("isCPF (return False)", () => {
	it("with masked cpf", () => {
		expect(isCPF("553.573.140-47")).toBe(false);
	});

	it("with invalid cpf (1)", () => {
		expect(isCPF("00000000000")).toBe(false);
	});

	it("with invalid cpf (2)", () => {
		expect(isCPF("88541113095")).toBe(false);
	});
});
