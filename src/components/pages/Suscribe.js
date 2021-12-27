import React from "react";
import logo from "../../img/logoRollingGris.svg";
import "./Login.css";
import FormularioSuscribe from "./FormularioSuscribe";

const Suscribe = (props) => {
  return (
    <section className="bgLogin">
      <section className="d-flex flex-wrap mt-5 pt-2">
        <div className="col-md-11 col-lg-5">
          <img
            src={logo}
            alt="logo rollingnews"
            className="ms-5 ps-sm-1 ps-md-5 w-75 d-none d-lg-block d-xl-none"
          />
        </div>

        <div className="col-md-10 col-lg-5 d-flex justify-content-sm-center justify-content-lg-end ms-5 mt-3 ">
          <FormularioSuscribe consultarUser={props.consultarUser} consultarAdmin={props.consultarAdmin} admins={props.admins} usuarios={props.usuarios}></FormularioSuscribe>
        </div>
      </section>
    </section>
  );
};

export default Suscribe;
