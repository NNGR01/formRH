import React, { useState, useEffect } from "react";
import styles from "../page.module.css";

interface Person {
  name: string;
  last_name: string;
  rut: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<Person>({
    name: "",
    last_name: "",
    rut: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Falla al enviar los datos");
      }
      alert("Persona agregada correctamente");
      setFormData({
        name: "",
        last_name: "",
        rut: "",
      });
    } catch (error) {
      console.error("Error al enviar datos", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="personName" className="form-label">
            Nombre
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div id="personName" className="form-text">
            Escribe el nombre
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="personLastName" className="form-label">
            Apellido
          </label>
          <input
            type="lastName"
            className="form-control"
            id="last_name"
            aria-describedby="lastName"
            value={formData.last_name}
            onChange={handleChange}
          />
          <div id="personLastName" className="form-text">
            Escribe el apellido
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="personRut" className="form-label">
            Rut
          </label>
          <input
            type="rut"
            className="form-control"
            id="rut"
            value={formData.rut}
            onChange={handleChange}
          />
          <div id="personRut" className="form-text">
            Escribe el rut
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
