import React from "react";
import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitario from "./BannerPublicitario";


const Inicio = () => {
  return (
      <section>

          <NoticiaPrincipal></NoticiaPrincipal>
          <NoticiasDestacadas></NoticiasDestacadas>
          <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
          <BannerPublicitario></BannerPublicitario>
          <NoticiasCategoriaInicio></NoticiasCategoriaInicio>
          <BannerPublicitario></BannerPublicitario>

      </section>

    
  );
};

export default Inicio;
