import React from "react";
import "./Inicio.css";
import Card from "react-bootstrap/Card";
import ImagenCard from "../../img/futbol.jpg";

const NoticiasDestacadas = () => {
  return (
    <div className="bgNoticiasDestacadas pb-5">
      <div className=" d-flex justify-content-center">
      <div className="col-12 col-md-3 col-lg-3 mx-lg-4">
        <Card className="bgCard">
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
      <div className="col-12 col-md-3 col-lg-3 mx-lg-4">
        <Card className="bgCard">
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
      <div className="col-12 col-md-3 col-lg-3 mx-lg-4">
        <Card className="bgCard">
          <Card.Img className="" variant="top" src={ImagenCard} />
          <Card className="bgCard">
            <Card.Title className="text-white mt-2 text-center">
              Card Title
            </Card.Title>
          </Card>
        </Card>
      </div>
    </div>
      </div>
  );
};

export default NoticiasDestacadas;
