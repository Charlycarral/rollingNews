import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/admin/admin.css";

const ItemNoticiaporCategoria = (props) => {
  return (
    <div className="my-4 me-auto">
      <Card
        border="light"
        className="d-flex flex-md-row justify-content-center"
        style={{ width: "85%" }}
      >
        <div>
          <Link
            to={`/noticias/${props.noticia._id}`}
            className="d-flex justify-content-center"
          >
            <Card.Img
              variant="top"
              src={props.noticia.imagen}
              className="w-imagen"
            />
          </Link>
        </div>
        <div>
          <Card.Body>
            <div className="d-flex justify-content-around">
              <Card.Title className="w-100 fs-6 ">
                {props.noticia.autor}
              </Card.Title>
              <Card.Title className="w-100 fs-6 d-flex justify-content-end">
                {props.noticia.fechanoticia}
              </Card.Title>
            </div>

            <Card.Title className="w-100 fs-4 d-flex justify-content-start fuenteTitulosAdmin">
              {props.noticia.titulo}
            </Card.Title>
            <Card.Text className="fs-5 lead d-none d-sm-block">
              {props.noticia.bajadanoticia}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default ItemNoticiaporCategoria;
