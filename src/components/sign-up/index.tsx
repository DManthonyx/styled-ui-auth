import React from "react";

// Components
import { Form } from "../form";
import { LogOut } from "../log-out";
// Utilities
import { getCurrentValues, checkErrosBasicSignUp } from "../../util/sign-up";

// Types
import type { BasicSignUpInputs, DescriptiveSignUpInputs } from "../../const/sign-up";

// Firebase
import { AuthContextProvider } from "../firebase/auth-context";

export interface SignUpPassedProps {
	inputsType: "basic-sign-up" | "descriptive-sign-up";
	inputs: typeof BasicSignUpInputs | typeof DescriptiveSignUpInputs;
	onSubmit: (user: any) => void;
}

const SignUp = (props: SignUpPassedProps) => {
	return (
		<AuthContextProvider>
			<div>
				<Form
					{...props}
					checkErrors={checkErrosBasicSignUp}
					getCurrentValues={getCurrentValues}
				/>
			</div>
		</AuthContextProvider>
	);
};

export { SignUp };
