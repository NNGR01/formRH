import React from "react";
import styles from "./../styles/page.module.css";
import ShowPersons from "./../views/showPersons";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.buttonBack}>
        <Link
          href={{
            pathname: "/",
          }}
        >
          Volver
        </Link>
      </div>

      <h1 className={styles.title}>Registros</h1>
      <div></div>
    </div>
  );
};

export default NavBar;