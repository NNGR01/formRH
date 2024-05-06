import React, { useEffect, useState } from "react";
import ChileanRutify from "chilean-rutify";

interface TextInputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RutComp: React.FC<TextInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
}) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const rutValidator = ChileanRutify.validRut(value);

    if (rutValidator) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value]);

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

      {valid ? (
        <p className="text-success">Rut valido</p>
      ) : (
        <p className="text-danger">Rut no valido</p>
      )}
    </div>
  );
};

export default RutComp;
