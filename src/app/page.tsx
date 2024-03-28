"use client";
import React, { useEffect, useState } from "react";
import Position from "./components/position";
import FormComponent from "./components/form";
import Contract from "./components/contract";
import PensionRecord from "./components/pensionRecord";
import Remuneration from "./components/remuneration";
import TotalForm2 from "./totalForm/totalForm2";
import ShowPersons from "./components/showPersons";
import styles from "./styles/page.module.css";


const Home = () => {

  return (
    <main className={styles.main}>
      <h1 className={styles.titleForm}>FICHA DE CONTRATACION EMPRESA</h1>
       <TotalForm2 /> 
    </main>
  );
};

export default Home;
