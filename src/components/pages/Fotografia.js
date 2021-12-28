import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Inicio.css";

const Fotografia = (props) => {
  return (
    <Col className="g-3">
      <Card className="bg-dark text-white">
        <Card.Img src={props.noticia.imagen} alt={props.noticia.titulo} className="hcardFoto"  />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-3 pb-3">
          <Card.Title className="fs-4 fw-bold  fuenteRolling bgtituloFotografia">
            {" "}
            {props.noticia.titulo}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default Fotografia;
