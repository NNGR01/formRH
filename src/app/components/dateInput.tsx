import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

interface CombinedDateInputProps {
  label: string;
  onChange: (combinedValue: string) => void;
}

const DateInput: React.FC<CombinedDateInputProps> = ({ label, onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      const formattedStartDate = format(date, "yyyy-MM-dd");
      setEndDate(date)
      onChange(formattedStartDate);
    }
  };


  return (
    <div className="input-group pb-1 pt-1">
      <span className="input-group-text">{label}</span>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        className="form-control"
        placeholderText="Ingresar Fecha"
      />
    </div>
  );
};

export default DateInput;

