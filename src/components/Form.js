import Input from "./Input";
import "./Form.css";
import { useInput } from "../hooks/useInput";
import { required, email } from "../helpers/validation";

export default function Form() {
	const inputs = [
		useInput("first_name", {
			rules: [required("First Name cannot be empty")],
		}),
		useInput("last_name", {
			rules: [required("Last Name cannot be empty")],
		}),
		useInput("email_address", {
			type: "email",
			rules: [
				required("Email Address cannot be empty"),
				email("Looks like this is not an email"),
			],
		}),
		useInput("password", {
			type: "password",
			rules: [required("Password cannot be empty")],
		}),
	];

	const handleSubmit = (evt) => {
		evt.preventDefault();

		inputs.forEach((input) => {
			input.setErrors(
				input.rules
					.map((rule) => rule(input.value))
					.filter((item) => item)
					.slice(0, 1)
			);
		});
	};

	return (
		<form className="form" onSubmit={handleSubmit} noValidate>
			<fieldset className="form__fieldset">
				{inputs.map((input) => (
					<Input
						key={input.name}
						name={input.name}
						placeholder={input.placeholder}
						value={input.value}
						errors={input.errors}
						type={input.type}
						onChange={input.setValue}
					/>
				))}

				<button className="form__button">Claim your free trial</button>

				<small className="form__small">
					By clicking the button, you are agreeing to our{" "}
					<a className="form__link" href="#terms">
						Terms and Services
					</a>
				</small>
			</fieldset>
		</form>
	);
}
