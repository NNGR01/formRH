"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import TitleLetter from "./titleLetter";

interface TotalFormProps {
  nombre_cargo: string,
  fecha_ingreso: string,
  nombres: string,
  apellidos: string,
  rut: string,
  fecha_nacimiento: string,
  direccion: string,
  comuna: string,
  estado_civil: string,
  nacionalidad: string,
  telefono: string,
  telefono_emergencia: string,
  mail: string,
  banco: string,
  numero_cuenta_banco: string,
  tipo_cuenta_banco: string,
  primer_contrato_plazo: string,
  segundo_contrato_plazo: string,
  contrato_indefinido: string,
  horario_trabajo: string,
  afp: string,
  salud: string,
  isapre: string,
  valor_isapre: string,
  liquido_pactado: string,
  bono_colacion: string,
  bono_movilizacion: string,
  otros_bonos: string,
  talla_camisa: string,
  talla_pantalon: string,
  logo: string,
  numero_calzado: string,
}

const TotalForm:React.FC<TotalFormProps>= () => {


  const [fechasPrimerPlazo, setFechasPrimerPlazo] = useState({
    primerPlazoDesde: "",
    primerPlazoHasta: "",
  });

  const [fechasSegundoPlazo, setFechasSegundoPlazo] = useState({
    segundoPlazoDesde: "",
    segundoPlazoHasta: "",
  });

  const combineInputs = () => {
    const combinedUno: string = `${fechasPrimerPlazo.primerPlazoDesde} ${fechasPrimerPlazo.primerPlazoHasta}`;
    setFormData((prevFormData : any) => ({
      ...prevFormData,
      primer_contrato_plazo: combinedUno,
    }));
  
    const combinedDos: string = `${fechasSegundoPlazo.segundoPlazoDesde} ${fechasSegundoPlazo.segundoPlazoHasta}`;
    setFormData((prevFormData : any) => ({
      ...prevFormData,
      segundo_contrato_plazo: combinedDos,
    }));
  };
  

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    rut: "",
    fecha_nacimiento: "",
    nombre_cargo: "",
    fecha_ingreso: "",
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
    primer_contrato_plazo: fechasPrimerPlazo,
    segundo_contrato_plazo: fechasSegundoPlazo,
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
  
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),      
      });
      console.log("handleSubmit", JSON.stringify(formData) );
      
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
        title="ANTECEDENTES DEL CARGO: (Uso exclusivo Empleador)"
      />

      <div className={styles.bodyComponent}>
        <div className="row row-cols-2">
          <div className="mb-3 col-7">
            <label htmlFor="nombre_cargo">Nombre del Cargo:</label>
            <input
              className="form-control"
              type="text"
              id="nombre_cargo"
              name="nombre_cargo"
              value={formData.nombre_cargo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="fecha_ingreso">Fecha de Ingreso:</label>
            <input
              className="form-control"
              type="text"
              id="fecha_ingreso"
              name="fecha_ingreso"
              value={formData.fecha_ingreso}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <TitleLetter letter="B" title="ANTECENDETES PERSONALES DEL TRABAJADOR" />

      <div className={styles.bodyComponent}>
        <div className="row row-cols-2">
          <div className="mb-3 col-7">
            <label htmlFor="nombres">Nombre:</label>
            <input
              className="form-control"
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-7">
            <label htmlFor="apellidos">Apellido Paterno:</label>
            <input
              className="form-control"
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
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
          <div className="mb-3 col-7">
            <label htmlFor="tipo_cuenta_banco" className="form-label me-3">
              Marcar Tipo de Cuenta Bancaria
            </label>
            <div className="form-check form-check-inline pl-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="Cta. Vista"
                value="Cta. Vista"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="tipo_cuenta_banco">
                Cta. Vista
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="Cta. Corriente"
                value="Cta. Corriente"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="tipo_cuenta_banco">
                Cta. Corriente
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="Cta. RUT"
                value="Cta. RUT"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="tipo_cuenta_banco">
                Cta. RUT
              </label>
            </div>
          </div>
        </div>
      </div>

      <TitleLetter
        letter="C"
        title="ANTECENDETES DEL CONTRATO: (Uso exclusivo Empleador)"
      />

      <div className={styles.bodyComponent}>
        <div className="row row-cols-12  g-lg-3 col-sm-8">
          <h6>Tipo de Contrato</h6>
          <div className="input-group ">
            <span className="input-group-text">1° Contrato Plazo Fijo</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Desde"
              id="primerPlazoDesde"
              name="primerPlazoDesde"
              value={fechasPrimerPlazo.primerPlazoDesde}
              onChange={handleChange}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              placeholder="Hasta"
              id="primerPlazoHasta"
              name="primerPlazoHasta"
              value={fechasPrimerPlazo.primerPlazoHasta}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">2° Contrato Plazo Fijo</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Desde"
              id="segundoPlazoDesde"
              name="segundoPlazoDesde"
              value={fechasSegundoPlazo.segundoPlazoDesde}
              onChange={handleChange}
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
              placeholder="Hasta"
              id="segundoPlazoHasta"
              name="segundoPlazoHasta"
              value={fechasSegundoPlazo.segundoPlazoHasta}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">Contrato Indefinido</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Desde"
              name="contrato_indefinido"
              value={formData.contrato_indefinido}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">Horario de Trabajo</span>
            <input
              type="text"
              aria-label="horario_trabajo"
              className="form-control"
              value={formData.horario_trabajo}
              onChange={handleChange}
              id="horario_trabajo"
              name="horario_trabajo"
            />
          </div>
        </div>
      </div>

      <TitleLetter letter="D" title="ANTECENDETES PREVISIONALES:" />

      <div className={styles.bodyComponent}>
        <div className="row row-cols-12  g-lg-3 col-sm-8">
          <div className="mb-3">
            <label htmlFor="afp" className="form-label">
              Nombre AFP
            </label>
            <input
              type="text"
              className="form-control"
              id="afp"
              name="afp"
              aria-describedby="afp"
              value={formData.afp}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salud" className="form-label">
              Sistema de Salud
            </label>
            <input
              type="text"
              className="form-control"
              id="salud"
              name="salud"
              aria-describedby="salud"
              value={formData.salud}
              onChange={handleChange}
            />
          </div>
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

      <TitleLetter letter="E" title="REMUNERACION: (Uso exclusivo Empleador)" />

      <div className={styles.remuneration}>
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="liquido_pactado" className="form-label">
                Líquido Pactado
              </label>
              <input
                type="text"
                className="form-control"
                id="liquido_pactado"
                name="liquido_pactado"
                aria-describedby="liquidoPactado"
                value={formData.liquido_pactado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bono_colacion" className="form-label">
                Bono Colación
              </label>
              <input
                type="text"
                className="form-control"
                id="bono_colacion"
                name="bono_colacion"
                aria-describedby="bonoColacion"
                value={formData.bono_colacion}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="bono_movilizacion" className="form-label">
                Bono Movilización
              </label>
              <input
                type="text"
                className="form-control"
                id="bono_movilizacion"
                name="bono_movilizacion"
                aria-describedby="bono_movilizacion"
                value={formData.bono_movilizacion}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="otros_bonos" className="form-label">
                Otros Bonos
              </label>
              <input
                type="text"
                className="form-control"
                id="otros_bonos"
                name="otros_bonos"
                aria-describedby="otros_bonos"
                value={formData.otros_bonos}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="col-4">
          <h5>TALLAS</h5>
          <div className="mb-3">
            <label htmlFor="talla_camisa" className="form-label">
              CAMISA:
            </label>
            <input
              type="text"
              className="form-control"
              id="talla_camisa"
              name="talla_camisa"
              aria-describedby="talla_camisa"
              value={formData.talla_camisa}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="talla_pantalon" className="form-label">
              PANTALON:
            </label>
            <input
              type="text"
              className="form-control"
              id="talla_pantalon"
              name="talla_pantalon"
              aria-describedby="talla_pantalon"
              value={formData.talla_pantalon}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="logo" className="form-label">
              LOGO:
            </label>
            <input
              type="text"
              className="form-control"
              id="logo"
              name="logo"
              aria-describedby="logo"
              value={formData.logo}
              onChange={handleChange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="numero_calzado" className="form-label">
              CALZADO:
            </label>
            <input
              type="text"
              className="form-control"
              id="numero_calzado"
              name="numero_calzado"
              aria-describedby="numero_calzado"
              value={formData.numero_calzado}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmit}
        >
          Enviar
        </button>
    </div>
  );
};

export default TotalForm;
