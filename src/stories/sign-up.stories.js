import React from "react";

import { storiesOf } from "@storybook/react";

import { SignUp } from "../components/sign-up";

import { BasicSignUpInputs, DescriptiveSignUpInputs } from "../const/sign-up";

const stories = storiesOf("Sign up", module);

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

stories.add("SignUp", () => {
	return (
		<>
			<SignUp
				firebaseConfig={firebaseConfig}
				inputsType={"basic-sign-up"}
				inputs={BasicSignUpInputs}
				onSubmit={() => console.log("onSubmit")}
			/>
		</>
	);
});
