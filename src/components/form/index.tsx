import React, { useState } from "react";
import { FormInput } from "../form-input";

import type { SignUpPassedProps } from "../sign-up";

import { BasicSignUpInputs, DescriptiveSignUpInputs, BasicSignUpInputValue, DescriptiveSignUpInputValue } from "../../const/sign-up";

type PassedProps = SignUpPassedProps;

function Form(props: PassedProps) {
	const { onSubmit, inputs, inputsType } = props;
	const currentInputs = (inputsType) => {
		if (inputsType === "basic-sign-up") {
			return BasicSignUpInputValue;
		}
		if (inputsType === "descriptive-sign-up") {
			return DescriptiveSignUpInputValue;
		}
	};

	const [error, setError]: [string, any] = useState("");
	const [values, setValues]: [any, any] = useState(currentInputs(inputsType));
    const [formInputs, setFormInputs ] = useState(inputs);
	const handleSubmit = (e) => {
		e.preventDefault();
        let newValues: any = [];
        for(let key in values) {
            let matchedInput = formInputs.find((input) => input.name === key)
            let i = values[key]
            if(matchedInput !== undefined && matchedInput.pattern) {
                if(!matchedInput.pattern.test(i)) {
                    matchedInput.isError = true
                    newValues.push(matchedInput)
                } else {
                    newValues.push(matchedInput)
                }
            } else {
                newValues.push(matchedInput)
            }
        }
        setFormInputs(newValues)
	};

	const handleOnChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	console.log(formInputs, values, "<--- props");
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
