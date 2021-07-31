import { useState } from "react";
import Input from "./Input";

export default function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const [firstNameErrors, setFirstNameErrors] = useState([]);
	const [lastNameErrors, setLastNameErrors] = useState([]);
	const [emailAddressErrors, setEmailAddressErrors] = useState([]);
	const [passwordErrors, setPasswordErrors] = useState([]);

	function invalidEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !re.test(email);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (firstName.length === 0) {
			setFirstNameErrors(["First Name cannot be empty"]);
		} else {
			setFirstNameErrors([]);
		}

		if (lastName.length === 0) {
			setLastNameErrors(["Last Name cannot be empty"]);
		} else {
			setLastNameErrors([]);
		}

		if (emailAddress.length === 0) {
			setEmailAddressErrors(["Email Address cannot be empty"]);
		} else if (invalidEmail(emailAddress)) {
			setEmailAddressErrors(["Looks like this is not an email"]);
		} else {
			setEmailAddressErrors([]);
		}

		if (password.length === 0) {
			setPasswordErrors(["Password cannot be empty"]);
		} else {
			setPasswordErrors([]);
		}
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<Input
				name="first_name"
				placeholder="First name"
				value={firstName}
				onChange={(evt) => {
					setFirstName(evt.target.value);
					setFirstNameErrors([]);
				}}
				errors={firstNameErrors}
			/>
			<Input
				name="last_name"
				placeholder="Last name"
				value={lastName}
				onChange={(evt) => {
					setLastName(evt.target.value);
					setLastNameErrors([]);
				}}
				errors={lastNameErrors}
			/>
			<Input
				name="email_address"
				placeholder="Email address"
				type="email"
				value={emailAddress}
				onChange={(evt) => {
					setEmailAddress(evt.target.value);
					setEmailAddressErrors([]);
				}}
				errors={emailAddressErrors}
			/>
			<Input
				name="password"
				placeholder="Password"
				type="password"
				value={password}
				onChange={(evt) => {
					setPassword(evt.target.value);
					setPasswordErrors([]);
				}}
				errors={passwordErrors}
			/>

			<button>Claim your free trial</button>

			<small>
				By clicking the button, you are agreeing to our{" "}
				<a href="#terms">Terms and Services</a>
			</small>
		</form>
	);
}