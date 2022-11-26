import { BasicSignUpInputValue, DescriptiveSignUpInputValue } from "../const/sign-up";

// Add types to inputType

export const getCurrentValues = (inputsType) => {
	if (inputsType === "basic-sign-up") {
		return BasicSignUpInputValue;
	}
	if (inputsType === "descriptive-sign-up") {
		return DescriptiveSignUpInputValue;
	}
};

export const checkErrosBasicSignUp = (formInputs, values) => {
	let newFormInputs: any[] = [];
	for (let key in values) {
		let matchedInput = formInputs.find((input) => input.name === key);
		let value = values[key];
		if (matchedInput !== undefined && matchedInput.pattern) {
			if (!matchedInput.pattern.test(value)) {
				matchedInput.isError = true;
				newFormInputs.push(matchedInput);
			} else {
				matchedInput.isError = false;
				newFormInputs.push(matchedInput);
			}
		} else {
			if (values["password"] !== values["confirmPassword"] || !values["password"]) {
				matchedInput.isError = true;
				newFormInputs.push(matchedInput);
			} else {
				matchedInput.isError = false;
				newFormInputs.push(matchedInput);
			}
		}
	}
	return newFormInputs;
};
