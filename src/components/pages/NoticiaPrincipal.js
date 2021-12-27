import React from "react";
import "./Inicio.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoticiaPrincipal = (props) => {
  return (
    <section className="ms-1 w-100">
      {props.categoria[0] &&
        props.categoria.map((categoria) => (
          <div className="d-flex justify-content-center w-100">
            <Card className="bg-dark text-white w-75">
              <Card.Img
                src={categoria.imagen}
                alt="{categoria.imagen.titulo}"
              />

              <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-5 pb-5">
                <Link
                  to={`/noticias/${categoria.id}`}
                  className="text-decoration-none"
                >
                  <Card.Title className="mb-2 pb-2 text-dark fs-1 fw-bold">
                    {categoria.titulo}
                  </Card.Title>
                </Link>
                <Link
                  to={`/noticias/${categoria.id}`}
                  className="text-decoration-none text-white"
                >
                  <Card.Text className="mb-5 pb-5 fw-bolder fs-2 ">
                    {categoria.bajadanoticia}
                  </Card.Text>
                </Link>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
    </section>
  );
};

export default NoticiaPrincipal;
