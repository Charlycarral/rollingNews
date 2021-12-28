import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitarioA from "./BannerPublicitarioA";
import BannerPublicitarioB from "./BannerPublicitarioB";
import ConsultarApis from "../common/apiClimaMoneda/ConsultarApis";
import "./Inicio.css";
import Suscriptores from "./Suscriptores";

const Inicio = (props) => {
  return (
    <section className="">
      <ConsultarApis></ConsultarApis>
      {props.noticiaprincipal && (
        <NoticiaPrincipal categoria={props.noticiaprincipal}></NoticiaPrincipal>
      )}
      {props.noticiasdestacadas && (
        <NoticiasDestacadas
          categoria={props.noticiasdestacadas}
        ></NoticiasDestacadas>
      )}
      <BannerPublicitarioA></BannerPublicitarioA>
      {props.noticiasdeportes && (
        <NoticiasCategoriaInicio
          categoria={props.noticiasdeportes}
        ></NoticiasCategoriaInicio>      )}
      {props.suscriptores && (
        <Suscriptores categoria={props.suscriptores}></Suscriptores>
        )}
        <BannerPublicitarioB></BannerPublicitarioB>

      {props.noticiaspolitica && (
        <NoticiasCategoriaInicio
        categoria={props.noticiaspolitica}
        ></NoticiasCategoriaInicio>
        )}
        <BannerPublicitarioA></BannerPublicitarioA>
      {props.noticiaseconomia && (
        <NoticiasCategoriaInicio
        categoria={props.noticiaseconomia}
        ></NoticiasCategoriaInicio>
        )}
        <BannerPublicitarioB></BannerPublicitarioB>
     
      {props.noticiasespectaculos && (
        <NoticiasCategoriaInicio
          categoria={props.noticiasespectaculos}
        ></NoticiasCategoriaInicio>
      )}
    </section>
  );
};

export default Inicio;
