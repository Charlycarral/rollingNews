import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NuevaCategoria = (props) => {
  const [nuevaCategoria, setNuevaCategoria] = useState();
  const URL_c = process.env.REACT_APP_API_URL_CAT;
  const navegacion = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaCat = { categoria: nuevaCategoria };
    try {
      const parametros = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaCat),
      };
      const respuesta = await fetch(URL_c, parametros);
      if (respuesta.status === 201) {
        Swal.fire(
          "Categoria agregada",
          "Su categoria fue agregada con exito",
          "success"
        );
        e.target.reset();
        props.consultarCat();
        navegacion("/admin/categorias");
      } else {
        Swal.fire(
          "Noticia no agregada",
          "Existen problemas con el servidor",
          "error"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-5 p-5">
      <h1 className="text-center mt-3 mb-5 pb-3 fuenteTitulosAdmin fw-bold bordetabla">
        Alta de Categorías
      </h1>

      <Form className="container w-25" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 fs-4">
          <Form.Label className="fs-4">Nombre de Categoría</Form.Label>
          <Form.Control
            type="text"
            maxlength='40'
            placeholder="Nueva Categoría"
            onChange={(e) => setNuevaCategoria(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </div>
  );
};

export default NuevaCategoria;
