import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import "./Inicio.css";

const Fotografia = (props) => {
 
  return (
  <Container>
    <Card className="bg-dark text-white">
      <Card.Img src={props.noticia.imagen} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-3 pb-3">
        <Card.Title className="fs-6"> {props.noticia.titulo}</Card.Title>
      </Card.ImgOverlay>
    </Card>
    </Container>
   
  );
};

export default Fotografia;
