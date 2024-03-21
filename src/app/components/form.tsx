import React, { useState, useEffect } from "react";
import styles from "../page.module.css";

interface Person {
  nombre: string;
  apellido_uno: string;
  apellido_dos: string;
  rut: string;
  fecha_nacimiento: string;
  direccion: string;
  comuna: string;
  estado_civil: string;
  nacionalidad: string;
  telefono: string;
  telefono_emeregencia: string;
  mail: string;
  banco: string;
  numero_cuenta_banco: string;
}

const FormComponent: React.FC = (enviar) => {
  console.log(enviar, "desde form");

  const [formData, setFormData] = useState<Person>({
    nombre: "",
    apellido_uno: "",
    apellido_dos: "",
    rut: "",
    fecha_nacimiento: "",
    direccion: "",
    comuna: "",
    estado_civil: "",
    nacionalidad: "",
    telefono: "",
    telefono_emeregencia: "",
    mail: "",
    banco: "",
    numero_cuenta_banco: "",
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
        nombre: "",
        apellido_uno: "",
        apellido_dos: "",
        rut: "",
        fecha_nacimiento: "",
        direccion: "",
        comuna: "",
        estado_civil: "",
        nacionalidad: "",
        telefono: "",
        telefono_emeregencia: "",
        mail: "",
        banco: "",
        numero_cuenta_banco: "",
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
    <div>
      <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>B</h4>
        <h4 className="text-black">ANTECENDETES PERSONALES DEL TRABAJADOR</h4>
      </div>
      <div className={styles.bodyComponent}>
        <div className="row row-cols-2">
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
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personLastName" className="form-label">
                Apellido paterno
              </label>
              <input
                type="lastName"
                className="form-control"
                id="last_name"
                aria-describedby="lastName"
                value={formData.apellido_uno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personLastName" className="form-label">
                Apellido materno
              </label>
              <input
                type="lastName"
                className="form-control"
                id="last_name"
                aria-describedby="lastName"
                value={formData.apellido_dos}
                onChange={handleChange}
              />
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
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.fecha_nacimiento}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Dirección
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.direccion}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Comuna
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.comuna}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Estado Civil
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.estado_civil}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Nacionalidad
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.nacionalidad}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Teléfono
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Teléfono Emergencia
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.telefono_emeregencia}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.mail}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                Banco
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.banco}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personRut" className="form-label">
                N° Cuenta Bancaria
              </label>
              <input
                type="rut"
                className="form-control"
                id="rut"
                value={formData.numero_cuenta_banco}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="personRut" className="form-label">
              Marcar Tipo de Cuenta Bancaria
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Cta. Vista
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Cta. Corriente
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                /*        disabled */
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Cta. RUT
              </label>
            </div>

            {/*      <button type="submit" className="btn btn-primary">
              Enviar
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
