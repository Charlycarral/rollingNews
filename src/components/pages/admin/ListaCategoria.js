import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";
import ItemListaCategoria from "./ItemListaCategoria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ListaCategoria = (props) => {
  // props.consultarCat();

  return (
    <div className=" container my-5 d-flex justify-content-center container">
      <div className="w-100 ">
        <div className="bordetabla mb-5">
          <h1 className="text-center mt-5 mb-3 fuenteTitulosAdmin fw-bold ">
            Lista de Categorías
          </h1>
        </div>

        <ListGroup className="d-flex justify-content-center align-items-center">
          <ListGroup.Item className="d-flex justify-content-between align-items-center w-50">
            <h2 className="ms-4">Categoría</h2>{" "}
            <h2 className="ms-auto me-5 ">Acciones</h2>{" "}
            <Link
              to="/admin/agregar-categoria"
              className="text-decoration-none text-dark"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="fs-1 m-2 text-primary"
              />
            </Link>
          </ListGroup.Item>

          {props.categorias.map((categoria) => (
            <ItemListaCategoria
              categoria={categoria}
              key={categoria.id}
              consultarCat={props.consultarCat}
            ></ItemListaCategoria>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default ListaCategoria;
