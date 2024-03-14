"use client";
import React, { useState } from "react";
import Image from "next/image";
import FormComponent from "./components/form";
import ShowPersons from "./components/showPersons";
import styles from "./page.module.css";

const Home = () => {
  const [showInfoPerson, setShowInfoPerson] = useState(false);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Formulario</h1>
      <FormComponent />

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
