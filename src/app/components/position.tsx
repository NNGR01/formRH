import React from "react";
import styles from "../page.module.css";

const Position = () => {
  return (
    <div>
      <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>A</h4>
        <h4 className="text-black">
          ANTECENDETES DEL CARGO: (Uso exclusio Empleador)
        </h4>
      </div>
      <div className={styles.bodyComponent}>
        <div className="row row-cols-2">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nombre_cargo"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Nombre del Cargo</label>
          </div>
        </div>
        <div className="row row-cols-2">
          <div className="form-floating">
            <input
              type="date"
              className="form-control col-3"
              id="fecha_ingreso"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Fecha de Ingreso</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
