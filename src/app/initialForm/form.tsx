import React, { useEffect, useState } from "react";
import styles from "../page.module.css";

const FormComponent = ({ send } : any) => {


  const [formData, setFormData] = useState({
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
    telefono_emergencia: "",
    mail: "",
    banco: "",
    numero_cuenta_banco: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al agregar la persona.");
      }

      const data = await response.json();
      console.log("Persona agregada exitosamente:", data);
    } catch (error: any) {
      console.error("Error al agregar la persona:", error.message);
    }
  };

  useEffect(() => {
    if (send) {
      handleSubmit();
    }
  }, [send]);


  return (
    <div>
      <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>B</h4>
        <h4 className="text-black">ANTECENDETES PERSONALES DEL TRABAJADOR</h4>
      </div>
      <div className={styles.bodyComponent}>
        <div className="row row-cols-2">
          <div className="mb-3 col-7">
            <label htmlFor="nombre">Nombre:</label>
            <input
              className="form-control"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="apellido_uno">Apellido Paterno:</label>
            <input
              className="form-control"
              type="text"
              id="apellido_uno"
              name="apellido_uno"
              value={formData.apellido_uno}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="apellido_dos">Apellido Materno:</label>
            <input
              className="form-control"
              type="text"
              id="apellido_dos"
              name="apellido_dos"
              value={formData.apellido_dos}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="rut">Rut:</label>
            <input
              className="form-control"
              type="text"
              id="rut"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="fecha_nacimiento"> Fecha de Nacimiento:</label>
            <input
              className="form-control"
              type="text"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              value={formData.fecha_nacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="comuna"> Dirección:</label>
            <input
              className="form-control"
              type="text"
              id="comuna"
              name="comuna"
              value={formData.comuna}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="direccion"> Comuna:</label>
            <input
              className="form-control"
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="estado_civil"> Estado Civil:</label>
            <input
              className="form-control"
              type="text"
              id="estado_civil"
              name="estado_civil"
              value={formData.estado_civil}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="nacionalidad"> Nacionalidad:</label>
            <input
              className="form-control"
              type="text"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="telefono"> Teléfono:</label>
            <input
              className="form-control"
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="telefono_emergencia"> Teléfono Emergencia:</label>
            <input
              className="form-control"
              type="text"
              id="telefono_emergencia"
              name="telefono_emergencia"
              value={formData.telefono_emergencia}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="mail"> Correo Electrónico:</label>
            <input
              className="form-control"
              type="text"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="banco"> Banco:</label>
            <input
              className="form-control"
              type="text"
              id="banco"
              name="banco"
              value={formData.banco}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="numero_cuenta_banco"> N° Cuenta Bancaria:</label>
            <input
              className="form-control"
              type="text"
              id="numero_cuenta_banco"
              name="numero_cuenta_banco"
              value={formData.numero_cuenta_banco}
              onChange={handleChange}
            />
          </div>

          {/*       <label htmlFor="personRut" className="form-label">
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
    
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Cta. RUT
              </label>
            </div> */}

      {/*     <button onClick={handleSubmit}>Enviar</button> */}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
