import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { campoRequerido } from "../../Helpers/helpers";
import Swal from "sweetalert2";
import "./admin.css";

const EditarCategoria = (props) => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({});
  const categoriaRef = useRef("");
  const navegacion = useNavigate();
  const URL_c = process.env.REACT_APP_API_URL_CAT + "/" + id;

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL_c);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        setCategoria(dato);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (campoRequerido(categoriaRef.current.value)) {
      const categoriaModificada = {
        categoria: categoriaRef.current.value,
      };
      try {
        const respuesta = await fetch(URL_c, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriaModificada),
        });
        console.log(respuesta);
        if ((await respuesta.status) === 200) {
          Swal.fire(
            "Categoría Modificada",
            "La categoría fue corrrectamente modificada",
            "success"
          );
          props.consultarCat();
          navegacion("/admin/categorias");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error en la validacion de los datos");
    }
  };

  return (
    <div className="fuenteTitulosAdmin">
      <div className="m-5 p-5">
        <h1 className="text-center mt-3 mb-5 pb-3 fuenteTitulosAdmin fw-bold bordetabla">
          Editar Categoría
        </h1>

        <Form className="container wForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 fs-4 ">
            <Form.Label className="fs-4">Nombre de Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nueva Categoría"
              defaultValue={categoria.categoria}
              ref={categoriaRef}
              className="wEditarCategoria"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Editar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditarCategoria;
