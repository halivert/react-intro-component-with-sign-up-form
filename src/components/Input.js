export default function Input({
  name,
  type = "text",
  placeholder,
  errors = [],
  value,
  onChange,
} = {}) {
  const errorsList = errors.map((error) => {
    return <li key={error}>{error}</li>;
  });

  const hasErrors = !!errorsList.length;

  return (
    <div>
      <input
        className={hasErrors ? "has-errors" : ""}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
      />
      {hasErrors ? <ul>{errorsList}</ul> : ""}
    </div>
  );
}
