import React from "react";

interface TextInputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}:</label>
      <input
        className="form-control"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
