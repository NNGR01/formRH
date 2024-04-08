import React from "react";
import styles from "./../styles/page.module.css";
import ShowPersons from "./../views/showPersons";
import NavBar from "../components/navBar";

const Register = () => {
  return (
    <div className={styles.mainBody}>
      <NavBar />
      <ShowPersons />
    </div>
  );
};

export default Register;
