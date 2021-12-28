import React from "react";
import "./Inicio.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoticiaPrincipal = (props) => {
  return (
      
    <section className="w-100 ">
      {props.categoria[0] &&
        props.categoria.map((categoria) => (
          <div className="bg-dark text-white w-100 bgseccionPrincipal">
            <Card.Img
              src={categoria.imagen}
              alt="{categoria.imagen.titulo}"
              className="sizeImagen mx-auto p-3"
            />

            <Card.ImgOverlay className="d-flex flex-column mtituloprincipal mt-5 pt-5 mx-auto w-75">
             
              <Link
                to={`/noticias/${categoria._id}`}
                className="text-decoration-none mtituloprincipal"
              >
                <Card.Title className="mb-2 pb-2 text-red fuenteTituloPrincipal fw-bold fuenteColorRojo fuenteRolling bgTituloNoticiaPrincipal">
                  {categoria.titulo}
                </Card.Title>
              </Link>
              <Link
                to={`/noticias/${categoria._id}`}
                className="text-decoration-none text-white  fuenteRolling bgTituloNoticiaPrincipal"
              >
                <Card.Text className="mb-5 pb-5 fw-bolder fuenteTituloSecundario">
                  {categoria.bajadanoticia}
                </Card.Text>
              </Link>
            </Card.ImgOverlay>
          </div>
        ))}
    </section>
  );
};

export default NoticiaPrincipal;
