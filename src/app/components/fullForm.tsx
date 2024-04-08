import React from "react";
import styles from "./../styles/page.module.css";
import TitleLetter from "./titleLetter";
import SingleData from "./singleData";

interface Person {
  id: string;
  empresa: string;
  nombreCargo: string;
  fechaIngreso: string;
  nombres: string;
  apellidos: string;
  rut: string;
  fechaNacimiento: string;
  direccion: string;
  comuna: string;
  estadoCivil: string;
  nacionalidad: string;
  telefono: string;
  telefonoEmergencia: string;
  mail: string;
  banco: string;
  numeroCuentaBanco: string;
  tipoCuentaBanco: string;
  primerContratoPlazo: string;
  segundoContratoPlazo: string;
  contratoIndefinido: string;
  horarioTrabajo: string;
  afp: string;
  salud: string;
  isapre: string;
  valorIsapre: string;
  liquidoPactado: string;
  bonoColacion: string;
  bonoMovilizacion: string;
  otrosBonos: string;
  tallaCamisa: string;
  tallaPantalon: string;
  logo: string;
  numeroCalzado: string;
}

const FullForm: React.FC<Person> = ({
  id,
  empresa,
  nombreCargo,
  fechaIngreso,
  nombres,
  apellidos,
  rut,
  fechaNacimiento,
  comuna,
  direccion,
  estadoCivil,
  telefono,
  telefonoEmergencia,
  mail,
  banco,
  nacionalidad,
  tipoCuentaBanco,
  numeroCuentaBanco,
  primerContratoPlazo,
  segundoContratoPlazo,
  contratoIndefinido,
  horarioTrabajo,
  afp,
  salud,
  isapre,
  valorIsapre,
  liquidoPactado,
  bonoColacion,
  bonoMovilizacion,
  otrosBonos,
  tallaCamisa,
  tallaPantalon,
  logo,
  numeroCalzado,
}) => {
  return (
    <>
      <div className="mb-5 pb-5 mt-5 pt-4 border border-3 p-3" key={id}>
        <TitleLetter
          letter="A"
          title={`ANTECEDENTES DEL CARGO - (contratado n° : ${id})`}
        />
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-3 text-decoration-underline"
            title="Nombre del Cargo"
            field={nombreCargo}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-3 text-decoration-underline"
            title="Fecha de Ingreso"
            field={fechaIngreso}
          />
             <SingleData
            divClass="d-flex col-4"
            pClass="ms-3 text-decoration-underline"
            title="Empresa"
            field={empresa}
          />
        </div>

        <TitleLetter
          letter="B"
          title="ANTECENDETES PERSONALES DEL TRABAJADOR"
        />
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Nombre"
            field={nombres}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Apellidos"
            field={apellidos}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Rut"
            field={rut}
          />
        </div>
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Fecha de Nacimiento"
            field={fechaNacimiento}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Comuna"
            field={comuna}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Dirección"
            field={direccion}
          />
        </div>
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Estado Civil"
            field={estadoCivil}
          />

          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Teléfono"
            field={telefono}
          />

          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Teléfono Emergencia"
            field={telefonoEmergencia}
          />
        </div>
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Correo Electrónico"
            field={mail}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Banco"
            field={banco}
          />
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Nacionalidad"
            field={nacionalidad}
          />
        </div>
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Tipo de Cuenta Bancaria"
            field={tipoCuentaBanco}
          />

          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="N° Cuenta Bancariaco"
            field={numeroCuentaBanco}
          />
        </div>
        <TitleLetter
          letter="C"
          title="ANTECENDETES DEL CONTRATO: (Uso exclusivo Empleador)"
        />
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="1° Contrato Plazo Fijo"
            field={primerContratoPlazo}
          />

          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="2° Contrato Plazo Fijo"
            field={segundoContratoPlazo}
          />

          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Contrato Indefinido"
            field={contratoIndefinido}
          />
        </div>
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-4"
            pClass="ms-4 text-decoration-underline"
            title="Horario de Trabajo"
            field={horarioTrabajo}
          />
        </div>

        <TitleLetter letter="D" title="ANTECENDETES PREVISIONALES:" />
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-3"
            pClass="ms-4 text-decoration-underline"
            title="Nombre AFP"
            field={afp}
          />

          <SingleData
            divClass="d-flex col-3"
            pClass="ms-4 text-decoration-underline"
            title="Sistema de Salud"
            field={salud}
          />

          <SingleData
            divClass="d-flex col-2"
            pClass="ms-4 text-decoration-underline"
            title="Isapre"
            field={isapre}
          />

          <SingleData
            divClass="d-flex col-2"
            pClass="ms-4 text-decoration-underline"
            title="Valor plan Isapre"
            field={valorIsapre}
          />
        </div>

        <TitleLetter
          letter="E"
          title="REMUNERACION: (Uso exclusivo Empleador)"
        />
        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-2 me-3"
            title="Líquido Pactado"
            pClass="ms-2 text-decoration-underline"
            field={liquidoPactado}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Bono Colación"
            pClass="ms-2 text-decoration-underline"
            field={bonoColacion}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Bono Movilización"
            pClass="ms-2 text-decoration-underline"
            field={bonoMovilizacion}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Otros Bonos"
            pClass="ms-2 text-decoration-underline"
            field={otrosBonos}
          />
        </div>

        <div className={styles.sectionBody}>
          <SingleData
            divClass="d-flex col-2 me-3"
            title="Camisa"
            pClass="ms-2 text-decoration-underline"
            field={tallaCamisa}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Patalon"
            pClass="ms-2 text-decoration-underline"
            field={tallaPantalon}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Logo"
            pClass="ms-2 text-decoration-underline"
            field={logo}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Cortaviento"
            pClass="ms-2 text-decoration-underline"
            field={tallaCamisa}
          />

          <SingleData
            divClass="d-flex col-2 me-3"
            title="Calzado"
            pClass="ms-2 text-decoration-underline"
            field={numeroCalzado}
          />
        </div>
      </div>
    </>
  );
};

export default FullForm;
