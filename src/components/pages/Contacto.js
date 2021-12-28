import React, { useState } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import {
  validarNombre,
  validarCorreo,
  campoRequerido,
} from "../Helpers/helpers";
import "./Login.css";
import emailjs from "emailjs-com";

const Result = () => {
  return <p>¡Su mensaje fue enviado con éxito!</p>;
};

const Contacto = () => {
  const [nombre, setNombre] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [mensaje, setMensaje] = useState(" ");
  const [errorContact, setErrorContact] = useState(false);
  const [result, setResult] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("nombre", nombre);
    console.log("email", email);
    console.log("mensaje", mensaje);
    if (
      validarNombre(nombre) &&
      validarCorreo(email) &&
      campoRequerido(mensaje)
    ) {
      const datos = { nombre: nombre, email: email, mensaje: mensaje };
      console.log(datos);
      setErrorContact(false);
      emailjs
        .send(
          "service_uxw7bsv",
          "template_112y3kj",
          datos,
          "user_AFJBEpDF707f2LYrcR8B5"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      e.target.reset();
      setResult(true);
    } else {
      setErrorContact(true);
    }
    /*//esconder resultado
    setTimeout(() => {
      setResult(false);
    }, 5000);*/
  };

  return (
    <section className="bgContacto textcontacto fuentenav p-5 mt-5">
      <Container>
        <Form className="container col-md-6 pb-5" onSubmit={sendEmail}>
          <h1 className="d-flex align-items-center mt-5 fw-bold">CONTÁCTENOS</h1>
          <Form.Group className=" flex-column align-items">
            <Form.Label className="fs-5">Nombre completo</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-5">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-5">Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              minLength="10"
              maxLength="200"
              onChange={(e) => setMensaje(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        {errorContact === true ? (
          <Alert variant="danger" className="mb-5">
            Debe completar todos los campos
          </Alert>
        ) : null}

        {result ? <Result /> : null}
      </Container>
    </section>
  );
};

export default Contacto;
