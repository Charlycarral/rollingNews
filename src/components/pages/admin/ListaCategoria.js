import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";
import ItemListaCategoria from "./ItemListaCategoria";

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
