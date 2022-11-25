import React from "react";

// Components
import { Form } from "../form";

// Utilities
import { getCurrentValues, checkErrosBasicSignUp } from "../../util/sign-up";

// Types
import type { BasicSignUpInputs, DescriptiveSignUpInputs } from "../../const/sign-up";

export interface SignUpPassedProps {
	inputsType: "basic-sign-up" | "descriptive-sign-up";
	inputs: typeof BasicSignUpInputs | typeof DescriptiveSignUpInputs;
	onSubmit: () => void;
}

const SignUp = (props: SignUpPassedProps) => {
	return (
		<div>
			<Form
				{...props}
				checkErrors={checkErrosBasicSignUp}
				getCurrentValues={getCurrentValues}
			/>
		</div>
	);
};

export { SignUp };
