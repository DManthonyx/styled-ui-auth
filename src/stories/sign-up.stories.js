import React from "react";

import { storiesOf } from "@storybook/react";

import { SignUp } from "../components/sign-up";

import { BasicSignUpInputs, DescriptiveSignUpInputs } from "../const/sign-up";

const stories = storiesOf("Sign up", module);

stories.add("SignUp", () => {
	return (
		<SignUp
			inputsType={"basic-sign-up"}
			inputs={BasicSignUpInputs}
			onSubmit={() => console.log("onSubmit")}
		/>
	);
});
