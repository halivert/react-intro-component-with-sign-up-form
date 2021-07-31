import invalidEmail from "../helpers/invalidEmail";

export function required(message) {
	return (value = "") => {
		if (!value || value.length === 0) {
			return message;
		}

		return null;
	};
}

export function email(message) {
	return (value = "") => {
		if (invalidEmail(value)) return message;
		return null;
	};
}
