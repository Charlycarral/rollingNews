import React from "react";
import logo from "../../img/logoRollingGris.svg";
import "./Login.css";
import FormularioLogin from "./FormularioLogin";

const Login = (props) => {
  return (
    <section className="bgLogin">
       <section className="d-flex flex-wrap mt-3">
        <div className="col-md-11 col-lg-5 ">
          <img
            src={logo}
            alt="logo rollingnews"
            className="ms-5 ps-sm-1 ps-md-5 w-75 my-5 d-none d-lg-block d-xl-none "
          />
        </div>

        <div className="col-md-10 col-lg-5 d-flex justify-content-sm-center align-items-sm-center justify-content-lg-end me-lg-1 ps-1 ms-4 mt-5">
          <FormularioLogin  loginCtrAd={props.loginCtrAd} setLoginCtrAd={props.setLoginCtrAd} loginCtr={props.loginCtr} setLoginCtr={props.setLoginCtr} admins={props.admins} usuarios={props.usuarios}></FormularioLogin>
        </div>
      </section>
    </section>
  );
};

export default Login;
