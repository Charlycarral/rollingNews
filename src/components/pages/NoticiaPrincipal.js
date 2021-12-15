import React from "react";
import "./Inicio.css";
import Futbol from "../../img/futbolb.jpg";

const NoticiaPrincipal = () => {
  return (
    <section >
      <div className="bgNoticiaPrincipal">
        <img src={Futbol} alt="futbol" className="noticiaPrincipal w-100 " />
      </div>
      <div className="d-flex row container divNoticiasDestacadas">
        <h2 className="tituloNoticias fs-1 ">Titulo Noticias</h2>
        <p className="text-white subtituloNoticias fs-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eum
          quibusdam! Odit repellat nihil
        </p>
      </div>
    </section>
  );
};

export default NoticiaPrincipal;
