import React, { useState, ChangeEvent } from 'react';

interface CombinedInputProps {
  label: string;
  placeholder1: string;
  placeholder2: string;
  onChange: (combinedValue: string) => void;
}

const CombinedInput: React.FC<CombinedInputProps> = ({
  label,
  placeholder1,
  placeholder2,
  onChange,
}) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    otherValue: string
  ) => {
    const value = e.target.value;
    setValue(value);
    onChange(`${value} - ${otherValue}`);
  };

  return (
    <div className="input-group">
      <span className="input-group-text">{label}</span>
      <input
        type="text"
        aria-label={placeholder1}
        className="form-control"
        placeholder={placeholder1}
        value={value1}
        onChange={(e) => handleValueChange(e, setValue1, value2)}
      />
      <input
        type="text"
        aria-label={placeholder2}
        className="form-control"
        placeholder={placeholder2}
        value={value2}
        onChange={(e) => handleValueChange(e, setValue2, value1)}
      />
    </div>
  );
};

export default CombinedInput;
