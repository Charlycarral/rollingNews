import React from "react";
import "./Inicio.css";
import Card from "react-bootstrap/Card";

const NoticiasDestacadas = (props) => {
  return (
    <div className="ms-1 bgNoticiasDestacadas d-flex justify-content-center pb-5 row w-100 ">
      {props.categoria[1] &&
        props.categoria.map((categoria) => (
          <div className="col-md-3 col-lg-4 mt-5 bgNoticiasDestacadas h-100">
            <Card className="bg-dark text-white">
              <Card.Img src={categoria.imagen} alt="Card image" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-3 pb-3">
                <Card.Title> {categoria.titulo}</Card.Title>
                <Card.Text>{categoria.bajadanoticia}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
    </div>
      
  );
};

export default NoticiasDestacadas;
