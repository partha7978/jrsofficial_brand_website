import { InputProps } from "../../interfaces/interface";

const Input = ({
  value = "",
  type,
  placeholder,
  name,
  required,
  disabled,
  background,
  color,
  border,
  width,
  className,
  onChange,
}: InputProps) => {
  const inputStyle = {
    border: border || "none",
    outline: "none",
    background: background || "#fff",
    color: color || "#000",
    borderColor: disabled ? "#ccc" : border || "#ccc",
    fontSize: "16px",
    width: width || "100%",
    padding: "1rem",
    borderRadius: "10px",
    minWidth: "200px",
  };
  return (
    <input
      className={className || ""}
      style={inputStyle}
      // value={value || ""}
      type={type || "text"}
      placeholder={placeholder || "Enter value here"}
      name={name || ""}
      required={required || false}
      disabled={disabled || false}
      // onChange={onChange || (() => {})}
    />
  );
};

export default Input;
