import React, { useState } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import {
  validarNombre,
  validarCorreo,
  campoRequerido,
} from "../Helpers/helpers";
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
    if (
      validarNombre(nombre) &&
      validarCorreo(email) &&
      campoRequerido(mensaje)
    ) {
      emailjs
        .sendForm(
          "Yservice_jwca2yg",
          "template_112y3kj",
          Form,
          "user_AFJBEpDF707f2LYrcR8B5"
        )
        .then((result) => {
          console.log(result.text);
        });
      e.target.reset();
      setResult(true);
    } else {
      setErrorContact(true);
    }
  };

  return (
    <Container>
      <Form className="container my-5 mb-4 col-md-6" onSubmit={sendEmail}>
        <h1 className="d-flex align-items-center mt-5">CONTÁCTENOS</h1>
        <Form.Group className=" flex-column align-items">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            minLength="40"
            maxLength="200"
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      {errorContact === true ? (
        <Alert variant="danger" className="mb-5">
          Debe completar todos los campos
        </Alert>
      ) : null}

      {result ? <Result /> : null}
    </Container>
  );
};

export default Contacto;
