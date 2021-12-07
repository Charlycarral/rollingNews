import React from "react";
import diarios from "../../img/redaccion.jpg";
import logo from "../../img/logoRollingGris.svg";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <section>
      <div>
        <img
          className="fixed imagenDiarios"
          src={diarios}
          alt="imagen de redaccion"
        />
      </div>
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
          <div className="divBienvenidos bg-dark">
            <h2 className="text-white mt-1 mb-5 fs-4 text-center">
              BIENVENIDO
            </h2>
            <Form>
              <Form.Group className="my-3 text-white">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group className="text-white">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
                <Form.Text className="text-muted mb-2 d-flex justify-content-end">
                  ¿Olvidaste tu contraseña?
                </Form.Text>
              </Form.Group>

              <Button variant="danger w-100 mt-5 mb-3" type="submit">
                INGRESAR
              </Button>
            </Form>

            <hr className="mt-5 text-white" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
