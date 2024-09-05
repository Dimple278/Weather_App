import { ITextInput } from "../Interface/ITextInput";

const TextInput = (props: ITextInput) => {
  const {
    type = "text",
    name,
    required,
    id,
    placeholder,
    onChange,
    value,
  } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="searchBar"
      value={value}
    />
  );
};

export default TextInput;
