import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasCategoriaInicio from "./NoticiasCategoriaInicio";
import BannerPublicitario from "./BannerPublicitario";
import ConsultarApis from "../common/apiClimaMoneda/ConsultarApis";
import './Inicio.css'



const Inicio = (props) => {
  return (
    <section className="w-100 container-fluid" >
      <ConsultarApis></ConsultarApis>
      {props.noticiaprincipal && (<NoticiaPrincipal categoria={props.noticiaprincipal} ></NoticiaPrincipal>)}
      {props.noticiasdestacadas && (<NoticiasDestacadas categoria={props.noticiasdestacadas} ></NoticiasDestacadas>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiasdeportes && (<NoticiasCategoriaInicio categoria={props.noticiasdeportes} ></NoticiasCategoriaInicio>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiaspolitica && (<NoticiasCategoriaInicio categoria={props.noticiaspolitica} ></NoticiasCategoriaInicio>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiaseconomia && (<NoticiasCategoriaInicio categoria={props.noticiaseconomia} ></NoticiasCategoriaInicio>)}
      <BannerPublicitario></BannerPublicitario>
      {props.noticiasespectaculos && (<NoticiasCategoriaInicio categoria={props.noticiasespectaculos} ></NoticiasCategoriaInicio>)}

    </section>
  );
};

export default Inicio;
