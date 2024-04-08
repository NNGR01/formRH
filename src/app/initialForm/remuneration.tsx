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
                type="text"
                className="form-control"
                id="liquido_pactado"
                aria-describedby="liquidoPactado"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Bono Colación
              </label>
              <input
                type="text"
                className="form-control"
                id="bono_colacion"
                aria-describedby="bonoColacion"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Bono Movilización
              </label>
              <input
                type="text"
                className="form-control"
                id="bono_movilizacion"
                aria-describedby="bonoMovilizacion"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="personName" className="form-label">
                Otros Bonos
              </label>
              <input
                type="text"
                className="form-control"
                id="otros_bonos"
                aria-describedby="otrosBonos"
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
              type="text"
              className="form-control"
              id="talla_camisa"
              aria-describedby="tallaCamisa"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              PANTALON:
            </label>
            <input
              type="text"
              className="form-control"
              id="talla_pantalon"
              aria-describedby="tallaPantalon"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              LOGO:
            </label>
            <input
              type="text"
              className="form-control"
              id="logo"
              aria-describedby="logo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              CORTAVIENTO:
            </label>
            <input
              type="text"
              className="form-control"
              id="talla_cortaviento"
              aria-describedby="tallaCortaviento"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="personName" className="form-label">
              CALZADO:
            </label>
            <input
              type="text"
              className="form-control"
              id="numero_calzado"
              aria-describedby="numeroCalzado"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Remuneration;
