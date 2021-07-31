import "./Input.css";

export default function Input({
	name,
	type = "text",
	placeholder,
	errors = [],
	value,
	onChange,
} = {}) {
	const errorsList = errors.map((error) => {
		return (
			<li key={error} className="input__error">
				{error}
			</li>
		);
	});

	const hasErrors = !!errorsList.length;

	return (
		<div
			className={
				"input__field" + (hasErrors ? " input__field--has-errors" : "")
			}
		>
			<div className="input__control">
				<input
					className="input"
					type={type}
					name={name}
					placeholder={placeholder}
					aria-label={placeholder}
					value={value}
					onChange={onChange}
				/>
			</div>
			{hasErrors ? <ul className="input__errors-list">{errorsList}</ul> : ""}
		</div>
	);
}
