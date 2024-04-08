"use client";
import React from "react";
import ShowPersons from "./views/showPersons";
import styles from "./styles/page.module.css";
import FinalForm from "./views/finalForm";
import Link from "next/link";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.buttonContainer}>
        <Link
          href={{
            pathname: "/register",
          }}
        >
          <button type="button" className="btn">
            Ver Registros
          </button>
        </Link>
      </div>
      <h1 className={styles.titleForm}>FICHA DE CONTRATACION EMPRESA</h1>
      <FinalForm />

    </main>
  );
};

export default Home;
