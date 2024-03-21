import React from "react";
import styles from "../page.module.css";

const Remuneration = () => {
  return (
    <div>
      <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>E</h4>
        <h4 className="text-black">REMUNERACION: (Uso exclusivo Empleador)</h4>
      </div>
      <div className={styles.remuneration}>
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Líquido Pactado
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
                Bono Colación
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
                Bono Movilización
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
                Otros Bonos
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                aria-describedby="name"
              />
            </div>
          </form>
        </div>
        <div className="col-3">
          <h5>TALLAS</h5>
          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              CAMISA:
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
              PANTALON:
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
              LOGO:
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
              CORTAVIENTO:
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
              CALZADO:
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Remuneration;
