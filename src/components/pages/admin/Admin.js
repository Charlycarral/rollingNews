import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import ImagenPanelAdmin from "../../../img/adminLogin.jpg";
import { Card } from "react-bootstrap";

const Admin = () => {
  return (
    <Card className="text-white h-25 positionimenu">
      <Card.Img src={ImagenPanelAdmin} alt="Card image" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-around align-items-center mt-5 pt-5">
        <Card.Title className="text-black fs-1 fw-bold fuenteTitulosAdmin">
          Bienvenido Admin
        </Card.Title>
        <Card.Text className="text-secondary fuenteTitulosAdmin fs-3">
          Desde el Menu Secciones puede acceder a todas las opciones de
          Administrador.
        </Card.Text>
        <Card.Text className="d-flex ">
          {" "}
          <div className="caja uno me-5 ">
            <Link
              to="/admin/lista-noticias"
              className="text-decoration-none text-dark mx-5 fuenteTitulosAdmin"
            >
              Noticias
            </Link>
          </div>
          <div className="caja 2 ">
            <Link
              to="/admin/categorias"
              className="text-decoration-none text-dark mx-5 fuenteTitulosAdmin"
            >
              Categorías
            </Link>
          </div>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Admin;
