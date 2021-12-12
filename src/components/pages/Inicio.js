import React from "react";
import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitario from "./BannerPublicitario";
import ConsultarApis from "../common/apiClimaMoneda/ConsultarApis";
import PaginaDetalleNoticias from "./PaginaDetalleNoticias";


const Inicio = () => {



  return (
      <section>
          <ConsultarApis></ConsultarApis>
          <NoticiaPrincipal></NoticiaPrincipal>
          <NoticiasDestacadas></NoticiasDestacadas>
          <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
          <BannerPublicitario></BannerPublicitario>
          <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
          <BannerPublicitario></BannerPublicitario>
          <PaginaDetalleNoticias></PaginaDetalleNoticias>
          
          

      </section>

    
  );
};

export default Inicio;
