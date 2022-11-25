import React, { useState } from "react";

import { Span } from "./styles";

interface PassedProps {
	type?: "text" | "password";
	value: string;
	placeholder: string;
	name: string;
	onChange: (e: React.ChangeEvent) => void;
	isError: boolean;
	errorMessage: string;
	pattern?: string;
}

function FormInput(props: PassedProps) {
	const { onChange, errorMessage, isError = false, pattern, ...rest } = props;

	const onChangeHandler = (e) => {
		onChange(e);
	};

	return (
		<div>
			<input {...rest} onChange={onChangeHandler} />
			<Span isError={isError}>{errorMessage}</Span>
		</div>
	);
}

export { FormInput };
