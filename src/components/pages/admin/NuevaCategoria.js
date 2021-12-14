import React from "react";
import { Form, Button } from "react-bootstrap";

const NuevaCategoria = () => {
  return (
    <div className="container m-5 p-5">
      <h1 className="my-4 pt-2 text-center">Alta de Categorías</h1>
      <Form className="container">
        <Form.Group className="mb-3 fs-4">
          <Form.Label className="fs-4">Nombre de Categoría</Form.Label>
          <Form.Control type="text" placeholder="Nueva Categoría" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </div>
  );
};

export default NuevaCategoria;
