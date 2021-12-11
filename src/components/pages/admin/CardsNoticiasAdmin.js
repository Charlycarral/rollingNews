import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './admin.css';

const CardsNoticiasAdmin = (props) => {

  console.log(props.noticia);
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-3 ">
      <Card >
        <Card.Img variant="top" src={props.noticia.imagen} />
        <Card.Body>
          <Card.Title><h4>{props.noticia.titulo}</h4></Card.Title>
          <Card.Text>
            <p>{props.noticia.descripcion}</p>
          </Card.Text>
          <div className=" d-flex justify-content-end align-items-center">
          <Link to='/admin/editar' className="mx-1 btn btn-editar">Editar</Link>
          <button className="mx-1 btn-borrar">Borrar</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsNoticiasAdmin;
