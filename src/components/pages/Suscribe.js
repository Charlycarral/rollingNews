import React from "react";
import logo from "../../img/logoRollingGris.svg";
import "./Login.css";
import FormularioSuscribe from "./FormularioSuscribe";

const Suscribe = (props) => {
  return (
    <section className="bgLogin">
      <div className="botonInicio">
        <button className="bgBotonInicio mt-4">INICIO</button>
      </div>
      <section className="d-flex flex-wrap">
        <div className="col-md-11 col-lg-5">
          <img
            src={logo}
            alt="logo rollingnews"
            className="ms-5 ps-sm-1 ps-md-5 w-75 mt-4 "
          />
        </div>

        <div className="col-md-10 col-lg-5 d-flex justify-content-sm-center justify-content-lg-end me-lg-1 ms-5">
          <FormularioSuscribe consultarUser={props.consultarUser} usuarios={props.usuarios}></FormularioSuscribe>
        </div>
      </section>
    </section>
  );
};

export default Suscribe;