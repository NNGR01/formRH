"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import CombinedInput from "../components/combinedInput";
import RadioButton from "../components/radioButton";
import TextInput from "../components/textInput";
import TitleLetter from "../components/titleLetter";


const FinalForm = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre_cargo: "",
    fecha_ingreso: "",
    nombres: "",
    apellidos: "",
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
    tipo_cuenta_banco: "",
    primer_contrato_plazo: "",
    segundo_contrato_plazo: "",
    contrato_indefinido: "",
    horario_trabajo: "",
    afp: "",
    salud: "",
    isapre: "",
    valor_isapre: "",
    liquido_pactado: "",
    bono_colacion: "",
    bono_movilizacion: "",
    otros_bonos: "",
    talla_camisa: "",
    talla_pantalon: "",
    logo: "",
    numero_calzado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFieldChange = (fieldName: any, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/qa/total_persona",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Hubo un error al agregar la persona.");
      }

      const data = await response.json();
      console.log("Persona agregada exitosamente:", data);
    } catch (error: any) {
      console.error("Error al agregar la persona:", error.message);
    }
  };

  console.log("desde totalForm", formData);

  return (
    <div>
      <TitleLetter
        letter="A"
        title="Empresa"
      />
      <div className={styles.bodyComponent}>
        <div className="col-7">
          <TextInput
            label="Nombre Empresa"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
        </div>
      </div>

      <TitleLetter
        letter="B"
        title="ANTECEDENTES DEL CARGO: (Uso exclusivo Empleador)"
      />
      <div className={styles.bodyComponent}>
        <div className="col-7">
          <TextInput
            label="Nombre del Cargo"
            id="nombre_cargo"
            name="nombre_cargo"
            value={formData.nombre_cargo}
            onChange={handleChange}
          />
          <TextInput
            label="Fecha de Ingreso"
            id="fecha_ingreso"
            name="fecha_ingreso"
            value={formData.fecha_ingreso}
            onChange={handleChange}
          />
        </div>
      </div>
      <TitleLetter letter="C" title="ANTECENDETES PERSONALES DEL TRABAJADOR" />

      <div className={styles.bodyComponent}>
        <div className="col-7">
          <TextInput
            label="Nombre"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />

          <TextInput
            label="Apellidos"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />

          <TextInput
            label="Rut"
            id="rut"
            name="rut"
            value={formData.rut}
            onChange={handleChange}
          />

          <TextInput
            label="Fecha de Nacimiento"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />

          <TextInput
            label="Comuna"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />

          <TextInput
            label="Dirección"
            id="comuna"
            name="comuna"
            value={formData.comuna}
            onChange={handleChange}
          />

          <TextInput
            label="Estado Civil"
            id="estado_civil"
            name="estado_civil"
            value={formData.estado_civil}
            onChange={handleChange}
          />

          <TextInput
            label="Nacionalidad"
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
          />

          <TextInput
            label="Teléfono"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />

          <TextInput
            label="Teléfono Emergencia"
            id="telefono_emergencia"
            name="telefono_emergencia"
            value={formData.telefono_emergencia}
            onChange={handleChange}
          />

          <TextInput
            label="Correo Electrónico"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />

          <TextInput
            label="Banco"
            id="banco"
            name="banco"
            value={formData.banco}
            onChange={handleChange}
          />

          <TextInput
            label="N° Cuenta Bancariaco"
            id="numero_cuenta_banco"
            name="numero_cuenta_banco"
            value={formData.numero_cuenta_banco}
            onChange={handleChange}
          />

          <label htmlFor="tipo_cuenta_banco" className="form-label me-3">
            Marcar Tipo de Cuenta Bancaria
          </label>

          <RadioButton
            label="Cta. Vista"
            id="Cta. Vista"
            name="tipo_cuenta_banco"
            checked={formData.tipo_cuenta_banco === "Cta. Vista"}
            onChange={handleChange}
          />

          <RadioButton
            label="Cta. Corriente"
            id="Cta. Corriente"
            name="tipo_cuenta_banco"
            checked={formData.tipo_cuenta_banco === "Cta. Corriente"}
            onChange={handleChange}
          />

          <RadioButton
            label="Cta. RUT"
            id="Cta. RUT"
            name="tipo_cuenta_banco"
            checked={formData.tipo_cuenta_banco === "Cta. RUT"}
            onChange={handleChange}
          />
        </div>
      </div>

      <TitleLetter
        letter="D"
        title="ANTECENDETES DEL CONTRATO: (Uso exclusivo Empleador)"
      />

      <div className={styles.bodyComponent}>
        <div className="row g-lg-3 col-sm-8">
          <h6>Tipo de Contrato</h6>
          <CombinedInput
            label="1° Contrato Plazo Fijo"
            placeholder1="Desde"
            placeholder2="Hasta"
            onChange={(value: any) =>
              handleFieldChange("primer_contrato_plazo", value)
            }
          />
          <CombinedInput
            label="2° Contrato Plazo Fijo"
            placeholder1="Desde"
            placeholder2="Hasta"
            onChange={(value: any) =>
              handleFieldChange("segundo_contrato_plazo", value)
            }
          />
          <div className="input-group">
            <span className="input-group-text">Contrato Indefinido</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Desde"
              id="contrato_indefinido"
              name="contrato_indefinido"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Horario de Trabajo</span>
            <input
              type="text"
              aria-label="horario_trabajo"
              className="form-control"
              onChange={handleChange}
              id="horario_trabajo"
              name="horario_trabajo"
            />
          </div>
        </div>
      </div>

      <TitleLetter letter="E" title="ANTECENDETES PREVISIONALES:" />

      <div className={styles.bodyComponent}>
        <div className="row row-cols-12  g-lg-3 col-sm-8">
          <TextInput
            label="Nombre AFP"
            id="afp"
            name="afp"
            value={formData.afp}
            onChange={handleChange}
          />

          <TextInput
            label="Sistema de Salud"
            id="salud"
            name="salud"
            value={formData.salud}
            onChange={handleChange}
          />

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">En caso de Isapre</span>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                id="isapre"
                name="isapre"
                aria-describedby="isapre"
                value={formData.isapre}
                onChange={handleChange}
              />
              <input
                type="text"
                aria-label="valor_isapre"
                className="form-control"
                placeholder="Valor del Plan"
                id="valor_isapre"
                name="valor_isapre"
                aria-describedby="valor_isapre"
                value={formData.valor_isapre}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <TitleLetter letter="F" title="REMUNERACION: (Uso exclusivo Empleador)" />

      <div className={styles.remuneration}>
        <div className="col-6">
          <TextInput
            label="Líquido Pactado"
            id="liquido_pactado"
            name="liquido_pactado"
            value={formData.liquido_pactado}
            onChange={handleChange}
          />

          <TextInput
            label="Bono Colación"
            id="bono_colacion"
            name="bono_colacion"
            value={formData.bono_colacion}
            onChange={handleChange}
          />

          <TextInput
            label="Bono Movilización"
            id="bono_movilizacion"
            name="bono_movilizacion"
            value={formData.bono_movilizacion}
            onChange={handleChange}
          />

          <TextInput
            label="Otros Bonos"
            id="otros_bonos"
            name="otros_bonos"
            value={formData.otros_bonos}
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <h5>TALLAS</h5>

          <TextInput
            label="CAMISA"
            id="talla_camisa"
            name="talla_camisa"
            value={formData.talla_camisa}
            onChange={handleChange}
          />

          <TextInput
            label="PANTALON"
            id="talla_pantalon"
            name="talla_pantalon"
            value={formData.talla_pantalon}
            onChange={handleChange}
          />

          <TextInput
            label="LOGO"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />

          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              CORTAVIENTO:
            </label>
            <input
              type="text"
              className="form-control"
              id="talla_cortaviento"
              name="talla_cortaviento"
              aria-describedby="tallaCortaviento"
            />
          </div>

          <TextInput
            label="CALZADO"
            id="numero_calzado"
            name="numero_calzado"
            value={formData.numero_calzado}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-secondary m-3"
          type="button"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default FinalForm;
