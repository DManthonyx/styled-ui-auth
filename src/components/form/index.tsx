import React, { useState } from "react";

// Components
import { FormInput } from "../form-input";

// Types
import type { SignUpPassedProps } from "../sign-up";

interface PassedProps extends SignUpPassedProps {
	checkErrors: (formInputs: any, values: any) => any;
	getCurrentValues: (inputsType: string) => any;
}

function Form(props: PassedProps) {
	const { onSubmit, inputs, inputsType, checkErrors, getCurrentValues } = props;

	const [values, setValues]: [any, any] = useState(getCurrentValues(inputsType));
	const [formInputs, setFormInputs]: [any, any] = useState(inputs);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newFormInputs = checkErrors(formInputs, values);
		if (newFormInputs.findIndex((input) => input.isError) < 0) {
			onSubmit();
		}
		setFormInputs(newFormInputs);
	};

	const handleOnChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
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
	);
}

export { Form };
