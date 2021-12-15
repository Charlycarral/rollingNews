import React from "react";
import "./Inicio.css";
import { Card } from "react-bootstrap";

const NoticiaPrincipal = (props) => {

  console.log(props.categoria)
  return (
    <section className="ms-1 w-100">
      {props.categoria[0] && (
      props.categoria.map((categoria) => (

        <div className="d-flex justify-content-center w-100">
          <Card className="bg-dark text-white w-100">
            <Card.Img
              src={categoria.imagen}
              alt="{props.categoria[0].titulo}"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-5 pb-5">
              <Card.Title className="mb-2 pb-2 text-dark fs-1 fw-bold">{categoria.titulo}</Card.Title>
              <Card.Text className="mb-5 pb-5 fw-bolder fs-2 ">{categoria.bajadanoticia}</Card.Text>
              
            </Card.ImgOverlay>
          </Card>
        </div>
      )))}
    </section>
  );
};

export default NoticiaPrincipal;
