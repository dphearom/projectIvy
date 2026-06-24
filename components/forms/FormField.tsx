interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  children?: React.ReactNode;
}

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  defaultValue,
  error,
  as = "input",
  rows = 4,
  children,
}: Props) => {
  const id = `field-${name}`;
  const className = `form-control${error ? " form-control--error" : ""}`;

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        {required && <span className="form-required"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          rows={rows}
          className={className}
        />
      ) : as === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
          className={className}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className={className}
        />
      )}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default FormField;
