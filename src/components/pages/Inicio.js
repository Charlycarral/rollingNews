import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitario from "./BannerPublicitario";
import ConsultarApis from "../common/apiClimaMoneda/ConsultarApis";


const Inicio = (props) => {
  return (
    <section>
      <ConsultarApis></ConsultarApis>
      <NoticiaPrincipal></NoticiaPrincipal>
      <NoticiasDestacadas></NoticiasDestacadas>
      {/* <NoticiasCategoriaInicio></NoticiasCategoriaInicio> */}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiasdeportes && (<NoticiasCategoriaInicio categoria={props.noticiasdeportes} ></NoticiasCategoriaInicio>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiaspolitica && (<NoticiasCategoriaInicio categoria={props.noticiaspolitica} ></NoticiasCategoriaInicio>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiaseconomia && (<NoticiasCategoriaInicio categoria={props.noticiaseconomia} ></NoticiasCategoriaInicio>)}

      {/* {props.noticiasdeportes && (
      <NoticiasCategoriaInicio
        categoria={props.noticiasdeportes} */}
      {/* ></NoticiasCategoriaInicio>
    )} */}
    </section>
  );
};

export default Inicio;
