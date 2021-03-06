import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { campoRequerido, validarCorreo } from "../Helpers/helpers";
import "./Inicio.css";

const FormularioSuscribe = (props) => {
  const [emailUsuario, setEmailUsuario] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState([]);
  const [contrasenaUsuario, setContrasenaUsuario] = useState([]);
  const [onlineuser] = "false";
  const [claveAdmin, setClaveAdmin] = useState([]);
  const [contrasenaUsuario_, setContrasenaUsuario_] = useState([]);
  const [isAdmin, setIsAdmin] = useState("false");
  const URL = process.env.REACT_APP_API_URL_USER;
  const URL_ = process.env.REACT_APP_API_URL_ADMIN;
  const PASSW = "240045";
  const navegacion = useNavigate();
  const bcrypt = require("bcryptjs");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validarCorreo(emailUsuario) &&
      campoRequerido(nombreUsuario) &&
      campoRequerido(contrasenaUsuario) &&
      campoRequerido(contrasenaUsuario_)
    ) {
      if (contrasenaUsuario === contrasenaUsuario_) {
        console.log(claveAdmin);
        if (claveAdmin.length === 0) {
          const contrasenaEncriptada = await bcrypt.hash(contrasenaUsuario, 10);

          const nuevoUsuario = {
            email: emailUsuario,
            nombre: nombreUsuario,
            online: onlineuser,
            contrasena: contrasenaEncriptada,
          };
          let existe = props.usuarios.find((usuario) => {
            return usuario.email === nuevoUsuario.email;
          });
          if (existe === undefined) {
            try {
              const parametros = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoUsuario),
              };
              const respuesta = await fetch(URL, parametros);
              if (respuesta.status === 201) {
                Swal.fire(
                  "Buen trabajo!",
                  "Usuario agregado correctamente",
                  "success"
                );

                props.consultarUser();

                e.target.reset();

                navegacion("/login");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Ocurri?? un error. Vuelva a intentarlo.",
                  footer: '<a href="">M??s informaci\'on?</a>',
                });
              }
            } catch (error) {
              console.log(error);
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "El usuario ya existe!",
              footer: '<a href="">M??s informaci\'on?</a>',
            });
          }
        } else {
          if (claveAdmin === PASSW) {
            const contrasenaEncriptada = await bcrypt.hash(
              contrasenaUsuario,
              10
            );

            const nuevoAdmin = {
              email: emailUsuario,
              nombre: nombreUsuario,
              contrasena: contrasenaEncriptada,
            };
            let existe = props.admins.find((usuario) => {
              return usuario.email === nuevoAdmin.email;
            });
            if (existe === undefined) {
              try {
                const parametros = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(nuevoAdmin),
                };
                const respuesta = await fetch(URL_, parametros);
                if (respuesta.status === 201) {
                  Swal.fire(
                    "Buen trabajo!",
                    "Admin agregado correctamente",
                    "success"
                  );

                  props.consultarAdmin();

                  e.target.reset();

                  navegacion("/login");
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Ocurri?? un error. Vuelva a intentarlo.",
                    footer: '<a href="">M??s informaci\'on?</a>',
                  });
                }
              } catch (error) {
                console.log(error);
              }
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El Admin ya existe!",
                footer: '<a href="">M??s informaci\'on?</a>',
              });
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Clave de Administador incorrecta",
              footer: '<a href="">M??s informaci\'on?</a>',
            });
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contrase??as no son iguales",
          footer: '<a href="">M??s informaci\'on?</a>',
        });
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

  const handleAdmin = () => {
    if (isAdmin === true) {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
  };

  const monstrarComponenteAdmin =
    isAdmin === true ? (
      <Form.Group className="my-2 text-white">
        <Form.Label>??Eres Administrador? </Form.Label>
        <Form.Control
          type="password"
          placeholder="Clave admin"
          onChange={(e) => setClaveAdmin(e.target.value)}
        />
      </Form.Group>
    ) : (
      ""
    );

  return (
    <div className="divBienvenidos bg-dark fuenteRolling">
      <h2 className="text-white mt-1 mb-1 fs-5 text-center">REGISTRATE</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2 text-white">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Su email"
            maxlength='35'
            onChange={(e) => setEmailUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-2 text-white">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Su nombre"
            maxlength='25'
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </Form.Group>
        {monstrarComponenteAdmin}
        {/* <Form.Group className="my-2 text-white">
            <Form.Label>??Eres Administrador? </Form.Label>
            <Form.Control type="password" placeholder="Clave admin" onChange={(e) => setClaveAdmin(e.target.value)}/>
          </Form.Group> */}

        <Form.Group className="my-2 text-white">
          <Form.Label>Contrase??a</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contrase??a"
            maxlength='20'
            onChange={(e) => setContrasenaUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="my-2 text-white">
          <Form.Label>Confirmar contrase??a</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contrase??a"
            maxlength='20'
            onChange={(e) => setContrasenaUsuario_(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger w-100 mt-3 " type="submit">
          REGISTRAR
        </Button>
      </Form>

      <hr className="text-white" />
      <Form.Group className="pt-3 mx-3">
        <Form.Check
          type="checkbox"
          className="text-secondary fs-6"
          label="??Eres administrador?"
          onClick={() => handleAdmin()}
        />
      </Form.Group>
    </div>
  );
};

export default FormularioSuscribe;
