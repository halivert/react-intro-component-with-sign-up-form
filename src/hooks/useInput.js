import { useState, useEffect } from "react";

export function useInput(name, extras = {}) {
	const [value, internalSetValue] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		setErrors([]);
	}, [value]);

	const setValue = (evt) => {
		internalSetValue(evt.target.value);
	};

	const placeholder = name
		.split("_")
		.map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
		.join(" ");

	return { name, value, setValue, errors, setErrors, placeholder, ...extras };
}
