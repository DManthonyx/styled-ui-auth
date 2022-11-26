import React, { useState, useContext, useEffect } from "react";

// Components
import { FormInput } from "../form-input";
import { SignOut } from "../sign-out";
// State
import { UserAuth } from "../firebase/auth-context";

// Types
import type { SignUpPassedProps } from "../sign-up";

interface PassedProps extends SignUpPassedProps {
	checkErrors: (formInputs: any, values: any) => any;
	getCurrentValues: (inputsType: string) => any;
}

function Form(props: PassedProps) {
	const { onSubmit, inputs, inputsType, checkErrors, getCurrentValues } = props;
	const { createUser, signOut } = UserAuth();

	const [values, setValues]: [any, any] = useState(getCurrentValues(inputsType));
	const [formInputs, setFormInputs]: [any, any] = useState(inputs);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newFormInputs = checkErrors(formInputs, values);
		if (newFormInputs.findIndex((input) => input.isError) < 0) {
			const { email, password } = values;
			try {
				const user = await createUser(email, password);
				console.log(user, "from form");
				onSubmit(user);
			} catch (err) {
				console.log(err, "firebase error");
			}
		}
		setFormInputs(newFormInputs);
	};

	const handleOnChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{formInputs.map((input, i) => {
					return (
						<FormInput
							key={i}
							value={values[input.name]}
							onChange={handleOnChange}
							{...input}
						/>
					);
				})}
				<button>Submit</button>
			</form>
			<SignOut signOut={signOut} />
		</>
	);
}

export { Form };
