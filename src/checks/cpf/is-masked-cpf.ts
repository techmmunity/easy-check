import { makeFunction } from "helpers/make-function";

import { checkCPF } from "./is-cpf";

const MASKED_CPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

export const checkMaskedCPF = (maskedCPF: string) => {
	if (MASKED_CPF.test(maskedCPF)) {
		return checkCPF(maskedCPF.replace(/\D/g, ""));
	}

	return false;
};

/**
 * Check if a string is a valid cpf
 * - 55357314047
 */
export const isMaskedCPF = makeFunction<string>({
	func: checkMaskedCPF,
});
