import React from "react";
import "./PaginaDetalleNoticias.css";
import { useParams } from "react-router";
import BannerPublicitario from "./BannerPublicitario";
import { useState, useEffect } from "react";
import SuscribiteAhora from "./SuscribiteAhora";

const PaginaDetalleNoticias = (props) => {
  const { id } = useParams();
  const [noticiaid, setNoticiaid] = useState({});
  const URL = process.env.REACT_APP_API_URL_NOTIC + "/" + id;
  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        console.log(respuesta);
        setNoticiaid(dato);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {noticiaid.categoria === "suscriptores" ? (
        props.loginCtr === true || props.loginCtrAd === true ? (
          <div>
            <div className="mb-5">
              <section className="banner container pt-5 mt-4 ">
                <div className="d-flex justify-content-center my-4">
                  <div
                    className="fs8 text-center rotuloCategoria text-uppercase fw-bold"
                    id="categoria"
                  >
                    {noticiaid.categoria}
                  </div>
                </div>

                <div className="titulo d-flex justify-content-center ">
                  <h2 className="w-75 my-2 text-center">{noticiaid.titulo}</h2>
                </div>

                <div className="d-flex justify-content-center">
                  <p className="detalleNoticia wbajada m-2">
                    {" "}
                    {noticiaid.bajadanoticia}
                  </p>
                </div>
                <div className="media d-flex justify-content-center">
                  <img
                    src={noticiaid.imagen}
                    alt="Johann Biacsics"
                    className="w-75 mt-3"
                  />
                </div>

                <div className="lead mt-3 d-flex justify-content-center ps-3 ms-5 fs-4  ">
                  <div className="w-75">
                    <p>{noticiaid.leadnoticia}</p>
                  </div>
                </div>

                <BannerPublicitario></BannerPublicitario>
                <div className="cuerpo">
                  <p>
                    {" "}
                    cuerponoticia
                    {noticiaid.cuerponoticia}
                  </p>
                </div>

                <div className="ending fs-4 me-5">
                  <p>Autor: {noticiaid.autor}</p>
                </div>
                <div className="ending2 fs-5 me-5">
                  <span>Fecha: {noticiaid.fechanoticia}</span>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <SuscribiteAhora></SuscribiteAhora>
        )
      ) : (
        <div className="mdetallenoticias">
          <section className="banner container pt-5 mt-4 ">
            <div className="d-flex justify-content-center my-4">
              <div
                className="fs8 text-center rotuloCategoria text-uppercase fw-bold"
                id="categoria"
              >
                {noticiaid.categoria}
              </div>
            </div>

            <div className="titulo d-flex justify-content-center ">
              <h2 className="wdetalle my-2 text-center">{noticiaid.titulo}</h2>
            </div>

            <div className="d-flex justify-content-center text-left">
              <p className="detalleNoticia wbajada m-2">
                {" "}
                {noticiaid.bajadanoticia}
              </p>
            </div>
            <div className="media d-flex justify-content-center">
              <img
                src={noticiaid.imagen}
                alt="Johann Biacsics"
                className="wdetalle mt-3"
              />
            </div>

            <div className="lead mt-3 d-flex justify-content-center ps-3 fs-4  ">
              <div className="wdetalle lead">
                <p>{noticiaid.leadnoticia}</p>
              </div>
            </div>

            <BannerPublicitario></BannerPublicitario>
            <div className="d-flex justify-content-center">
              <div className="cuerpo lead wdetalle  ms-2 text-left">
                <p>
                  {" "}
                  cuerponoticia
                  {noticiaid.cuerponoticia}
                </p>
              </div>
            </div>
            <div className="ending fs-4 me-5">
              <p>Autor: {noticiaid.autor}</p>
            </div>
            <div className="ending2 fs-5 me-5">
              <span>Fecha: {noticiaid.fechanoticia}</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default PaginaDetalleNoticias;
