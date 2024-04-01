import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import TitleLetter from "../totalForm/titleLetter";

interface Person {
  id_total_persona: string;
  nombre_cargo: string;
  fecha_ingreso: string;
  nombres: string;
  apellidos: string;
  rut: string;
  fecha_nacimiento: string;
  direccion: string;
  comuna: string;
  estado_civil: string;
  nacionalidad: string;
  telefono: string;
  telefono_emergencia: string;
  mail: string;
  banco: string;
  numero_cuenta_banco: string;
  tipo_cuenta_banco: string;
  primer_contrato_plazo: string;
  segundo_contrato_plazo: string;
  contrato_indefinido: string;
  horario_trabajo: string;
  afp: string;
  salud: string;
  isapre: string;
  valor_isapre: string;
  liquido_pactado: string;
  bono_colacion: string;
  bono_movilizacion: string;
  otros_bonos: string;
  talla_camisa: string;
  talla_pantalon: string;
  logo: string;
  numero_calzado: string;
}

const ShowPersons: React.FC = () => {
  const [data, setData] = useState<Person[] | null>(null); // Definimos el tipo de estado como Person[] | null


    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/qa/total_persona",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: Person[] = await response.json(); // Definimos el tipo de jsonData como Person[]
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

const handleFetch = () => {
  fetchData();
}


  return (
    <div >
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary m-3" type="button" onClick={handleFetch}>
          Mostrar
        </button>
      </div>
      {data && (
        <div className={styles.singlePerson}>
          {data.map((persona) => (
            <div className="mb-5 pb-5 mt-5 pt-4 border border-3 p-3" key={persona.id_total_persona}>
              <TitleLetter
                letter="A"
                title={`ANTECEDENTES DEL CARGO - (contratado n° : ${persona.id_total_persona})`}
              />
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Nombre del cargo :</p>
                  <p className="ms-3 text-decoration-underline">
                    {persona.nombre_cargo}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Fecha de Ingreso :</p>
                  <p className="ms-3 text-decoration-underline">
                    {persona.fecha_ingreso}
                  </p>
                </div>
              </div>

              <TitleLetter
                letter="B"
                title="ANTECENDETES PERSONALES DEL TRABAJADOR"
              />
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Nombres :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.nombres}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Apellidos :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.apellidos}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Rut :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.rut}
                  </p>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Fecha Nacimiento :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.fecha_nacimiento}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Comuna :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.comuna}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Dirección :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.direccion}
                  </p>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Estado Civil :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.estado_civil}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Teléfono :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.telefono}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Teléfono Emergencia :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.telefono_emergencia}
                  </p>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Correo Electrónico :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.mail}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Banco :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.banco}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Nacionalidad :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.nacionalidad}
                  </p>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Tipo de Cuenta Bancaria :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.tipo_cuenta_banco}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>N° Cuenta Bancariaco :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.numero_cuenta_banco}
                  </p>
                </div>
              </div>
              <TitleLetter
                letter="C"
                title="ANTECENDETES DEL CONTRATO: (Uso exclusivo Empleador)"
              />
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>1° Contrato Plazo Fijo :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.primer_contrato_plazo}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>2° Contrato Plazo Fijo :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.segundo_contrato_plazo}
                  </p>
                </div>
                <div className="d-flex col-4">
                  <p>Contrato Indefinido :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.contrato_indefinido}
                  </p>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <div className="d-flex col-4">
                  <p>Horario de Trabajo :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.horario_trabajo}
                  </p>
                </div>
              </div>

              <TitleLetter letter="D" title="ANTECENDETES PREVISIONALES:" />
              <div className={styles.sectionBody}>
                <div className="d-flex col-3">
                  <p>Nombre AFP</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.afp}
                  </p>
                </div>
                <div className="d-flex col-3">
                  <p>Sistema de Salud</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.salud}
                  </p>
                </div>
                <div className="d-flex col-2">
                  <p>Isapre :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.isapre}
                  </p>
                </div>
                <div className="d-flex col-2">
                  <p>Valor plan Isapre :</p>
                  <p className="ms-4 text-decoration-underline">
                    {persona.valor_isapre}
                  </p>
                </div>
              </div>

              <TitleLetter
                letter="E"
                title="REMUNERACION: (Uso exclusivo Empleador)"
              />
              <div className={styles.sectionBody}>
                <div className="d-flex col-2 me-3">
                  <p>Líquido Pactado:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.liquido_pactado}
                  </p>
                </div>
                <div className="d-flex col-2 me-3">
                  <p>Bono Colación:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.bono_colacion}
                  </p>
                </div>
                <div className="d-flex col-3 me-3">
                  <p>Bono Movilización:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.bono_movilizacion}
                  </p>
                </div>
                <div className="d-flex col-2 me-3">
                  <p>Otros Bonos:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.otros_bonos}
                  </p>
                </div>
              </div>

              <div className={styles.sectionBody}>
                <div className="d-flex col-2 me-3">
                  <p>Camisa:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.talla_camisa}
                  </p>
                </div>
                <div className="d-flex col-2 me-3">
                  <p>Patalon:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.talla_pantalon}
                  </p>
                </div>
                <div className="d-flex col-2 me-3">
                  <p>Logo:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.logo}
                  </p>
                </div>
                <div className="d-flex col-2 me-3">
                  <p>Cortaviento:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.talla_camisa}
                  </p>
                </div>
                <div className="d-flex col-2 me-3 mb-5">
                  <p>Calzado:</p>
                  <p className="ms-2 text-decoration-underline">
                    {persona.numero_calzado}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowPersons;
