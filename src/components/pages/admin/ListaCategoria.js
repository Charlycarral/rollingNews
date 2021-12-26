import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";
import ItemListaCategoria from "./ItemListaCategoria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ListaCategoria = (props) => {
  return (
    <div className=" container my-5 d-flex justify-content-center flex-column align-items-center container fuenteTitulosAdmin text-center">
      <div className="w-100 ">
        <div className="bordetabla mb-5">
          <h1 className="text-center mt-5 pt-5 mb-3 fuenteTitulosAdmin fw-bold ">
            Lista de Categorías
          </h1>
        </div>
      </div>
      <Table hover responsive className="p-3 mb-5 bg-body rounded w-100 ">
        <thead>
          <tr>
            <th className="me-5 fs-4" scope="col">
              Categoría
            </th>
            <th className="ms-5 ps-2 fs-4" scope="col">
              Acciones
              <Link
                to="/admin/agregar-categoria"
                className="text-decoration-none text-dark"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fs-3 ms-2 text-primary"
                />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.categorias.map((categoria) => (
            <ItemListaCategoria
              categoria={categoria}
              key={categoria.id}
              consultarCat={props.consultarCat}
            ></ItemListaCategoria>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaCategoria;
