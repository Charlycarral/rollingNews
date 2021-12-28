import React from "react";
import Suscribite from "../../img/suscribite.png";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Inicio.css'

const SuscribiteAhora = () => {
  return (
    <Card className="bg-dark text-white pt-4 mt-5">
      <Card.Img src={Suscribite} alt="Card image" className="wimagensuscribete"/>
      <Card.ImgOverlay>
        <div className="msuscribeteahora pt-5 w-75">
          <Card.Title className="fs-1 fw-bold wsuscribeteahora fuenteRolling">
            Registrate gratis y segui disfrutando del mejor contenido
          </Card.Title>
          <Card.Text className="fuenteRolling">
            <ul>
              <li>Acceso ilimitado a Rolling News</li>
              <li>Contenido exclusivo</li>
              <li>Newsletter desde la redacción</li>
            </ul>
          </Card.Text>
          <Button variant="primary fuenteRolling"><Link to="/login" className="text-white text-decoration-none">Inicie Sesion</Link></Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default SuscribiteAhora;
