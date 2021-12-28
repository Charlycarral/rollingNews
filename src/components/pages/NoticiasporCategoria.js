import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemNoticiaporCategoria from "./ItemNoticiaporCategoria";
import Fotografia from "./Fotografia";
import "./Inicio.css";
import { Row, Col } from "react-bootstrap";

const NoticiasporCategoria = () => {
  const { categoria } = useParams();
  const [noticiascategoria, setNoticiascategoria] = useState([]);
  const [fotografias, setFotografias] = useState();
  const URL = process.env.REACT_APP_API_URL_NOTIC;

  useEffect(() => {
    busquedaporcategoria();
  }, [categoria]);

  const busquedaporcategoria = async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        const noticiasPorCategoria = await dato.filter(
          (noticia) => noticia.categoria === categoria
        );
        setNoticiascategoria(noticiasPorCategoria);

        const articuloFotograficos = await dato.filter(
          (noticia) => noticia.categoria === "fotografía"
        );
        setFotografias(articuloFotograficos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarPagina =
    categoria === "fotografía" ? (
      <Row xs={1} sm={1} md={2} lg={3}>
        {Array.from({ length: 1 }).map(
          (_, idx) =>
            fotografias &&
            fotografias.map((noticia) => (
              <Fotografia
                className="bgNoticiasDestacadas"
                noticia={noticia}
                key={noticia._id}
              ></Fotografia>
            ))
        )}
      </Row>
    ) : (
      noticiascategoria &&
      noticiascategoria.map((noticia) => (
        <div className="row">
          <ItemNoticiaporCategoria noticia={noticia} key={noticia._id} />
        </div>
      ))
    );

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center bg-light mx-auto">
      <div className="bordetabla htitulocategoria d-flex flex-column justify-content-center align-items-center">
        {" "}
        <h2 className="mt-5 fs-1 text-uppercase fuenteTitulosAdmin fw-bold ">
          {noticiascategoria[0] && noticiascategoria[0].categoria}
        </h2>
      </div>
      {mostrarPagina}
    </div>
  );
};

export default NoticiasporCategoria;
