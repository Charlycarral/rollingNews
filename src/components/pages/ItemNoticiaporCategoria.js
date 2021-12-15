import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemNoticiaporCategoria = (props) => {
  return (
    <div className="my-4">
      <Card
        border="light"
        className="d-flex flex-row"
        style={{ width: "60rem" }}
      >
        <Link
          to={`/noticias/${props.noticia.id}`}
          className="d-flex justify-content-center"
        >
          <Card.Img
            variant="top"
            src={props.noticia.imagen}
            className="w-75 img-fluid"
          />
        </Link>

        <Card.Body>
          <Card.Title className="w-100 fs-6 d-flex justify-content-end">
            {props.noticia.fechanoticia}
          </Card.Title>
          <Card.Title className="w-100 fs-3 d-flex justify-content-start">
            {props.noticia.titulo}
          </Card.Title>
          <Card.Text className="fs-5">{props.noticia.bajadanoticia}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemNoticiaporCategoria;
