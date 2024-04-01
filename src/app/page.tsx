"use client";
import React from "react";
import ShowPersons from "./components/showPersons";
import styles from "./styles/page.module.css";
import FinalForm from "./totalForm/finalForm";


const Home = () => {

  return (
    <main className={styles.main}>
      <h1 className={styles.titleForm}>FICHA DE CONTRATACION EMPRESA</h1>
      <FinalForm /> 
      <ShowPersons />
    </main>
  );
};

export default Home;
