import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemNoticiaporCategoria from "./ItemNoticiaporCategoria";

const NoticiasporCategoria = () => {
  const { categoria } = useParams();
  const [noticiascategoria, setNoticiascategoria] = useState([]);
  const URL = `${process.env.REACT_APP_API_URL_NOTIC}?categoria=${categoria}`;

  useEffect(() => {
    busquedaporcategoria();
  }, []);

  const busquedaporcategoria = async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        setNoticiascategoria(dato);
        console.log(noticiascategoria);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 d-flex flex-column justify-content-center align-items-center ">
      <div className="bordetabla htitulocategoria d-flex flex-column justify-content-center align-items-center">
        {" "}
        <h2 className="mt-5 fs-1 text-uppercase fuenteTitulosAdmin fw-bold ">
          {noticiascategoria[0] && noticiascategoria[0].categoria}
        </h2>
      </div>

      {noticiascategoria &&
        noticiascategoria.map((noticia) => (
          <div>
            <ItemNoticiaporCategoria noticia={noticia} key={noticia._id} />
            <hr></hr>
          </div>
        ))}
    </div>
  );
};

export default NoticiasporCategoria;
