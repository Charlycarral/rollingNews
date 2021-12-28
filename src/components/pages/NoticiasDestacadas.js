import React from "react";
import "./Inicio.css";
import Card from "react-bootstrap/Card";

const NoticiasDestacadas = (props) => {
  return (
    <div className="ms-0 bgseccionPrincipal d-flex justify-content-center pb-5 row w-100 ">
      {props.categoria[1] &&
        props.categoria.map((categoria) => (
          <div className="col-md-6 col-lg-4 mt-5  h-100">
            <Card className="bgseccionPrincipal text-white">
              <Card.Img src={categoria.imagen} alt="Card image" className="w-100 hcarddestacada" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center mb-3 pb-3">
                <Card.Title className="bgTituloNoticiaPrincipal fuenteRolling"> {categoria.titulo}</Card.Title>
                {/* <Card.Text>{categoria.bajadanoticia}</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
    </div>
      
  );
};

export default NoticiasDestacadas;
