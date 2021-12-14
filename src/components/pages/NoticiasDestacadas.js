import React from "react";
import "./Inicio.css";
import Card from "react-bootstrap/Card";
import ImagenCard from "../../img/futbol.jpg";

const NoticiasDestacadas = () => {
  return (
    <div className="bgNoticiasDestacadas d-flex justify-content-center pb-5 row ">
      <div className="col-md-3 col-lg-3">
        <Card className="bgCard rounded-3" style={{ width: "18rem" }}>
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
      <div className="col-md-3 col-lg-3">
        <Card className="bgCard rounded-3" style={{ width: "18rem" }}>
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
      <div className="col-md-3 col-lg-3">
        <Card className="bgCard rounded-3" style={{ width: "18rem" }}>
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default NoticiasDestacadas;
