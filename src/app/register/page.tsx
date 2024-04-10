import React from "react";
import styles from "./../styles/page.module.css";
import NavBar from "../components/navBar";
import ShowPersons from "../views/showPersons";

const Register = () => {
  return (
    <div className={styles.mainBody}>
      <NavBar />
      <ShowPersons />
    </div>
  );
};

export default Register;
