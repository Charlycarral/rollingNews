import React from "react";
import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitario from "./BannerPublicitario";
import ConsultarApis from "../common/apiClimaMoneda/ConsultarApis";
import PaginaDetalleNoticias from "./PaginaDetalleNoticias";

const Inicio = (props) => {
  return (
    <section>
      {/* <ConsultarApis></ConsultarApis> */}
      <NoticiaPrincipal></NoticiaPrincipal>
      <NoticiasDestacadas></NoticiasDestacadas>
      <section className="container">
        <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
        <BannerPublicitario></BannerPublicitario>
        <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
        <BannerPublicitario></BannerPublicitario>
      </section>
    </section>
  );
};

export default Inicio;
