import { cn } from "@/lib/utils";

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
  const className = cn(
    "w-full py-[0.65rem] px-[0.85rem] border rounded-lg text-[0.9rem] bg-paper text-ink transition-colors duration-150 outline-none focus:border-gold",
    error ? "border-[#c0392b]" : "border-[color-mix(in_srgb,var(--ink)_15%,transparent)]",
  );

  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-[0.85rem] font-medium text-ink mb-[0.35rem]">
        {label}
        {required && <span className="text-gold"> *</span>}
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
      {error && <p className="text-[#c0392b] text-[0.8rem] mt-[0.35rem]">{error}</p>}
    </div>
  );
};

export default FormField;
