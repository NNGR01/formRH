"use client";
import React, { useState, useEffect } from "react";
import FullForm from "../components/fullForm";

interface Person {
  id_total_persona: string;
  empresa: string;
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
  estado: string;
}

const Show2: React.FC = () => {
  const [data, setData] = useState<Person[] | null>(null);
  const [filteredData, setFilterData] = useState<Person[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
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
        const jsonData: Person[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered =
      data?.filter((persona) =>
        Object.values(persona).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) || [];
    setFilterData(filtered);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Escribe aqui..."
                  aria-label="Buscar"
                  value={searchTerm}
                  onChange={handleChangeSearch}
                />
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
      </nav>

      <div>
        {filteredData
          ? filteredData.map((persona) => (
              <FullForm
                key={persona.id_total_persona}
                id={persona.id_total_persona}
                nombreCargo={persona.nombre_cargo}
                fechaIngreso={persona.fecha_ingreso}
                empresa={persona.empresa}
                nombres={persona.nombres}
                apellidos={persona.apellidos}
                rut={persona.rut}
                fechaNacimiento={persona.fecha_nacimiento}
                comuna={persona.comuna}
                direccion={persona.direccion}
                estadoCivil={persona.estado_civil}
                telefono={persona.telefono}
                telefonoEmergencia={persona.telefono_emergencia}
                mail={persona.mail}
                banco={persona.banco}
                nacionalidad={persona.nacionalidad}
                tipoCuentaBanco={persona.tipo_cuenta_banco}
                numeroCuentaBanco={persona.numero_cuenta_banco}
                primerContratoPlazo={persona.primer_contrato_plazo}
                segundoContratoPlazo={persona.segundo_contrato_plazo}
                contratoIndefinido={persona.contrato_indefinido}
                horarioTrabajo={persona.horario_trabajo}
                afp={persona.afp}
                salud={persona.salud}
                isapre={persona.isapre}
                valorIsapre={persona.valor_isapre}
                liquidoPactado={persona.liquido_pactado}
                bonoColacion={persona.bono_colacion}
                bonoMovilizacion={persona.bono_movilizacion}
                otrosBonos={persona.otros_bonos}
                tallaCamisa={persona.talla_camisa}
                tallaPantalon={persona.talla_pantalon}
                logo={persona.logo}
                numeroCalzado={persona.numero_calzado}
                estado={persona.estado}
              />
            ))
          : data &&
            data.map((persona) => (
              <FullForm
                key={persona.id_total_persona}
                id={persona.id_total_persona}
                nombreCargo={persona.nombre_cargo}
                fechaIngreso={persona.fecha_ingreso}
                empresa={persona.empresa}
                nombres={persona.nombres}
                apellidos={persona.apellidos}
                rut={persona.rut}
                fechaNacimiento={persona.fecha_nacimiento}
                comuna={persona.comuna}
                direccion={persona.direccion}
                estadoCivil={persona.estado_civil}
                telefono={persona.telefono}
                telefonoEmergencia={persona.telefono_emergencia}
                mail={persona.mail}
                banco={persona.banco}
                nacionalidad={persona.nacionalidad}
                tipoCuentaBanco={persona.tipo_cuenta_banco}
                numeroCuentaBanco={persona.numero_cuenta_banco}
                primerContratoPlazo={persona.primer_contrato_plazo}
                segundoContratoPlazo={persona.segundo_contrato_plazo}
                contratoIndefinido={persona.contrato_indefinido}
                horarioTrabajo={persona.horario_trabajo}
                afp={persona.afp}
                salud={persona.salud}
                isapre={persona.isapre}
                valorIsapre={persona.valor_isapre}
                liquidoPactado={persona.liquido_pactado}
                bonoColacion={persona.bono_colacion}
                bonoMovilizacion={persona.bono_movilizacion}
                otrosBonos={persona.otros_bonos}
                tallaCamisa={persona.talla_camisa}
                tallaPantalon={persona.talla_pantalon}
                logo={persona.logo}
                numeroCalzado={persona.numero_calzado}
                estado={persona.estado}
              />
            ))}
      </div>
    </div>
  );
};

export default Show2;