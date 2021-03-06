import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { campoRequerido, validarCorreo } from "../Helpers/helpers";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Login.css'

const FormularioLogin = (props) => {
  const [emailUsuario, setEmailUsuario] = useState([]);
  const [contrasenaUsuario, setContrasenaUsuario] = useState([]);
  const navegacion = useNavigate();
  const bcrypt = require("bcryptjs");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarCorreo(emailUsuario) && campoRequerido(contrasenaUsuario)) {
      // crear objeto Usuario
      const nuevoUsuario = {
        email: emailUsuario,
        contrasena: contrasenaUsuario,
      };
      if (props.loginCtr === false) {
        let user = props.usuarios.find((usuario) => {
          return usuario.email === nuevoUsuario.email;
        });
        let admin = props.admins.find((usuario) => {
          return usuario.email === nuevoUsuario.email;
        });
        if (user !== undefined) {
          const validoUser = await bcrypt.compare(
            nuevoUsuario.contrasena,
            user.contrasena
          );
          if (validoUser) {
            props.setLoginCtr(true);
            navegacion("/");
          }
        } else if (admin !== undefined) {
          const validoAdmin = await bcrypt.compare(
            nuevoUsuario.contrasena,
            admin.contrasena
          );
          if (validoAdmin) {
            props.setLoginCtr(true);
            props.setLoginCtrAd(true);
            navegacion("/admin");
          }
        } else if (admin !== undefined) {
          const validoAdmin = await bcrypt.compare(
            nuevoUsuario.contrasena,
            admin.contrasena
          );
          if (validoAdmin) {
            props.setLoginCtr(true);
            navegacion("/admin");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario no existe!",
            footer: '<a href="">M??s informaci\'on?</a>',
          });
        }
      } else {
        navegacion("/");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios!",
        footer: '<a href="">M??s informaci\'on?</a>',
      });
    }
  };
  return (
    <div className="divBienvenidos bg-dark fuentenav">
      <h2 className="text-white mt-1 mb-5 fs-4 text-center">BIENVENIDO</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-white">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            maxlength='35'
            onChange={(e) => setEmailUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="text-white">
          <Form.Label>Contrase??a</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contrase??a"
            maxlength='20'
            onChange={(e) => setContrasenaUsuario(e.target.value)}
          />
          <Form.Text className="text-muted mb-2 d-flex justify-content-end">
            <Link to="/suscribe" className="text-decoration-none text-secondary">??No tienes cuenta? Reg??strate aqui.</Link>
          </Form.Text>
        </Form.Group>

        <Button variant="danger w-100 mt-5 mb-3" type="submit">
          INGRESAR
        </Button>
      </Form>

      <hr className="mt-5 text-white" />
    </div>
  );
};

export default FormularioLogin;
