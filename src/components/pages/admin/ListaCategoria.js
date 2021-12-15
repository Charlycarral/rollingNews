import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";
import ItemCategoria from "./ItemCategoria";

const ListaCategoria = (props) => {
  // props.consultarCat();

  return (
    <div className=" container my-5 d-flex justify-content-center">
      <div>
        <h1 className="my-5 text-center pt-5">Lista de Categorías</h1>
        <ListGroup>
          {
            props.categorias.map((categoria)=><ItemCategoria categoria={categoria} key={categoria.id} consultarCat={props.consultarCat}></ItemCategoria>)
          }
        </ListGroup>
   
      </div>
    </div>
  );
};

export default ListaCategoria;
