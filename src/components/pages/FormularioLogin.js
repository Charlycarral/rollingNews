import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioLogin = () => {
  return (
    <div className="divBienvenidos bg-dark">
      <h2 className="text-white mt-1 mb-5 fs-4 text-center">BIENVENIDO</h2>
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
  );
};

export default FormularioLogin;
