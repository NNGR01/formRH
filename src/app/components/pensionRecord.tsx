import React from "react";
import styles from "../page.module.css";

const PensionRecord = () => {
  return <div>
        <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>D</h4>
        <h4 className="text-black">
          ANTECENDETES PREVISIONALES
        </h4>

      </div>
      <div className={styles.bodyComponent}>
      <div className="row row-cols-12  g-lg-3 col-sm-8">
    <form>
    <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Nombre AFP
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                aria-describedby="name"

              />
            </div>
            <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Sistema de Salud
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                aria-describedby="name"

              />
            </div>
            <div className="mb-3">
      
           <div className="input-group">
          <span className="input-group-text">En caso de Isapre</span>
          <input type="text" aria-label="First name" className="form-control"/>
          <input type="text" aria-label="Last name" className="form-control" placeholder="Valor del Plan" />
        </div>
            </div>
    </form>
    </div>
    </div>
    </div>;
};

export default PensionRecord;
