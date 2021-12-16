import React from "react";
import "./PaginaDetalleNoticias.css";
import { useParams, } from "react-router";
import BannerPublicitario from "./BannerPublicitario";

const PaginaDetalleNoticias = (props) => {
  
  const {id} =  useParams();


     return (
    <div>

<div>
        <section className="banner container mt-5 ">
          <div className="d-flex justify-content-center">
            <div className="fs8 text-center rotuloCategoria">
               {props.noticias[id-1].categoria}
            </div>
          </div>

          <div className="titulo d-flex justify-content-center ">
            <h2 className="w-75 text-center">
              {props.noticias[id-1].titulo}
              </h2> 
          </div>
          <div>
            <p className="detalleNoticia">
              {" "}
              {props.noticias[id-1].bajadanoticia}
            </p>
          </div>
          <div className="media d-flex justify-content-center">
            <img
              src={props.noticias[id-1].imagen}
              alt="Johann Biacsics"
              className="w-75"
            />
          </div>

          <div className="lead mt-3 d-flex justify-content-center ps-3 ms-5 ">
            <div className="">
              <p>{props.noticias[id-1].leadnoticia}</p>
            </div>
          </div>

          <BannerPublicitario></BannerPublicitario>
          <div className="cuerpo">
            <p>
              {" "}
              cuerponoticia
              {props.noticias[id-1].cuerponoticia}
            </p>
          </div>

          <div className="ending">
            <p>Autor: {props.noticias[id-1].autor}</p>
          </div>
          <div className="ending2">
            <span>{props.noticias[id-1].fechanoticia}</span>
          </div>
        </section>
        <hr />
        <section className="masnoticias">
          <div>
            <h3>
              Después de 47 años, Colombia le volvió a ganar una serie a Estados
              Unidos en la Copa Davis <span>por NoticiasporelMundo</span>
            </h3>
            <h3>
              ¿Cómo proteger tu información de los ciberataques? Mira algunos
              consejos <span>por Ana María Luengo</span>
            </h3>
            <h3>
              Kristalina Georgieva dijo que todavía queda “mucho por hacer” para
              cerrar el acuerdo con el FMI <span>por Rafael Mathus Ruiz</span>
            </h3>
          </div>
        </section>
      </div>

     
      
    </div>
  );
};

export default PaginaDetalleNoticias;
