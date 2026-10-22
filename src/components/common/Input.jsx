import FormError from "./FormError";

function Input({
  label,
  error,
  ...props
}) {
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}> {label} </label>
      <input
        {...props}
        id={props.id || props.name}
      />
      <FormError message={error} />
    </div>
  );
}

export default Input;