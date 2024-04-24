import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

interface CombinedDateInputProps {
  label: string;
  onChange: (combinedValue: string) => void;
}

const CombinedDateInput: React.FC<CombinedDateInputProps> = ({
  label,
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate) {
      const formattedStartDate = format(date, "yyyy-MM-dd");
      const formattedEndDate = format(endDate, "yyyy-MM-dd");
      onChange(`${formattedStartDate} - ${formattedEndDate}`);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    if (date && startDate) {
      const formattedStartDate = format(startDate, "yyyy-MM-dd");
      const formattedEndDate = format(date, "yyyy-MM-dd");
      onChange(`${formattedStartDate} - ${formattedEndDate}`);
    }
  };

  return (
    <div className="input-group">
      <span className="input-group-text">{label}</span>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="form-control"
        placeholderText="Fecha de inicio"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="form-control"
        placeholderText="Fecha de fin"
      />
    </div>
  );
};

export default CombinedDateInput;
