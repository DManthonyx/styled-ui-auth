import React from "react";

import { Form } from "../form";

import type { BasicSignUpInputs, DescriptiveSignUpInputs } from "../../const/sign-up";

export interface SignUpPassedProps {
	inputsType: "basic-sign-up" | "descriptive-sign-up";
	inputs: typeof BasicSignUpInputs | typeof DescriptiveSignUpInputs;
	onSubmit: () => void;
}

const SignUp = (props: SignUpPassedProps) => {
	return (
		<div>
			<Form {...props} />
		</div>
	);
};

export { SignUp };
