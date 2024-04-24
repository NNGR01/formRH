import React, { useState } from "react";
import RadioButton from "./radioButton";

const AproveComp = () => {
  const [formData, setFormData] = useState({
    estado: "Pendiente",
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-check form-check-inline">
      <RadioButton
        label="Aprobado"
        id="Aprobado"
        name="estado"
        checked={formData.estado === "Aprobado"}
        onChange={handleChange}
      />
    </div>
  );
};

export default AproveComp;
