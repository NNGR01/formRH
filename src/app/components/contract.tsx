import React from "react";
import styles from "../page.module.css";

const Contract = () => {
  return (
    <div>
      <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>C</h4>
        <h4 className="text-black">
          ANTECENDETES DEL CONTRATO: (Uso exclusio Empleador)
        </h4>
      </div>
      <div className={styles.bodyComponent}>
      <div className="row row-cols-12  g-lg-3 col-sm-8">
        <h6>Tipo de Contrato</h6>
        <div className="input-group ">
          <span className="input-group-text">1° Contrato Plazo Fijo</span>
          <input type="text" aria-label="First name" className="form-control" placeholder="Desde"/>
          <input type="text" aria-label="Last name" className="form-control" placeholder="Hasta" />
        </div>
        <div className="input-group">
          <span className="input-group-text">2° Contrato Plazo Fijo</span>
          <input type="text" aria-label="First name" className="form-control" placeholder="Desde"/>
          <input type="text" aria-label="Last name" className="form-control" placeholder="Hasta" />
        </div>
        <div className="input-group">
          <span className="input-group-text">Contrato Indefinido</span>
          <input type="text" aria-label="First name" className="form-control" placeholder="Desde"/>
        </div>
        <div className="input-group">
          <span className="input-group-text">Horario de Trabajo</span>
          <input type="text" aria-label="First name" className="form-control"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contract;
