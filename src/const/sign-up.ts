export const BasicSignUpInputs = [
	{
		name: "username",
		type: "text",
		placeholder: "Username",
		errorMessage:
			"Username should be atlesat 3-16 chracters and shouldn't include any specail characters!",
		pattern: new RegExp(/^[a-zA-Z0-9]{3,16}$/),
	},
	{
		name: "email",
		type: "text",
		placeholder: "Email",
		errorMessage: "Should be a valid email address!",
		pattern: new RegExp(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		),
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		errorMessage: "Password should be 8-20 characters and include atleast 1 letter, 1 number!",
		pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
		errorMessage: "Passwords don't match!",
	},
] as const;

export const BasicSignUpInputValue = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export const DescriptiveSignUpInputs = [
	{
		name: "firstname",
		type: "text",
		placeholder: "First name",
	},
	{
		name: "lastname",
		type: "text",
		placeholder: "Last name",
	},
	{
		name: "birthday",
		type: "text",
		placeholder: "Birthday",
	},
	{
		name: "ethnicity",
		type: "text",
		placeholder: "Ethnicity",
	},
	{
		name: "gender",
		type: "text",
		placeholder: "Gender",
	},
	{
		name: "location",
		type: "text",
		placeholder: "Location",
	},
] as const;

export const DescriptiveSignUpInputValue = {
	firstname: "",
	lastname: "",
	birthday: "",
	ehtnicity: "",
	gender: "",
	location: "",
};
