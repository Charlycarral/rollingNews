import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/admin/admin.css";

const ItemNoticiaporCategoria = (props) => {
  const fechaN = new Date(props.noticia.fechanoticia);
  const fecha = fechaN.toLocaleDateString();

  return (
    <div className="my-4 mx-auto ">
      <Card
        border="light"
        className="d-flex flex-md-row justify-content-center"
        
      >
        <div>
          <Link
            to={`/noticias/${props.noticia._id}`}
            className="d-flex justify-content-center "
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
              <Card.Title className="w-100 fs-6 fuenteTitulosAdmin ">
                {props.noticia.autor}
              </Card.Title>
              <Card.Title className="w-100 fs-6 d-flex justify-content-end fuenteTitulosAdmin">
                {fecha}
              </Card.Title>
            </div>
            <div className="wCardCategoria">
              <Card.Title className="w-100 fs-4 d-flex justify-content-start fuenteTitulosAdmin">
                {props.noticia.titulo}
              </Card.Title>
              <Card.Text className="fs-5 lead d-none d-sm-block">
                {props.noticia.bajadanoticia}
              </Card.Text>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default ItemNoticiaporCategoria;
