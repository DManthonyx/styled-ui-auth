import React, { useState } from "react";

import { Span } from './styles';

interface PassedProps {
	type?: "text" | "password";
	value: string;
	placeholder: string;
	name: string;
	onChange: (e: React.ChangeEvent) => void;
    isError: boolean;
    errorMessage: string;
}

function FormInput(props: PassedProps) {
	const { type = "text", onChange, errorMessage, placeholder, name, value, isError = false } = props;

    const onChangeHandler = (e) => {
        onChange(e)
    } 
    console.log(isError, '<-----')
	return (
        <div>
            <input type={type} onChange={onChangeHandler} placeholder={placeholder} value={value} name={name} />
            <Span isError={isError}>{errorMessage}</Span>
        </div>
    )
}

export { FormInput };
