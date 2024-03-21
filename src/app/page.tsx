"use client";
import React, { useEffect, useState } from "react";
import Position from "./components/position";
import FormComponent from "./components/form";
import Contract from "./components/contract";
import PensionRecord from "./components/pensionRecord";
import Remuneration from "./components/remuneration";
import ShowPersons from "./components/showPersons";
import styles from "./page.module.css";

const Home = () => {
  const [showInfoPerson, setShowInfoPerson] = useState(false);
  const [send, setSend] = useState(false);

  const sendForm = () => {
    setSend(!send);
  };

  useEffect(() => {
    setSend(false);
  }, [sendForm]);

  console.log(send, "estado");

  return (
    <main className={styles.main}>
      <h1 className={styles.titleForm}>FICHA DE CONTRATACION EMPRESA</h1>
      <Position />
      <FormComponent enviar={send} />
      <Contract />
      <PensionRecord />
      <Remuneration />

      <div className={styles.buttonContainer}>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={sendForm}
        >
          Enviar
        </button>
      </div>
      <div className="d-grid gap-2 d-md-block">
        <button
          onClick={() => setShowInfoPerson(!showInfoPerson)}
          className="btn btn-primary"
          type="button"
        >
          {!showInfoPerson ? "Mostrar" : "Ocultar"}
        </button>
      </div>

      {showInfoPerson && <ShowPersons />}
    </main>
  );
};

export default Home;
