import React, { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Pagination, Table } from "react-bootstrap";
import CardsNoticiasAdmin from "./CardsNoticiasAdmin";
import { Link } from "react-router-dom";
import "./admin.css";
import Paginacion from "./Paginacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NoticiasAdmin = (props) => {
  // PAGINACION
  const [paginaActual, setPaginaActual] = useState(1);
  const [noticiasPorPagina] = useState(10);

  const indexUltimaNoticia = paginaActual * noticiasPorPagina;
  const indexPrimerNoticia = indexUltimaNoticia - noticiasPorPagina;
  const currentPost = props.noticias.slice(
    indexPrimerNoticia,
    indexUltimaNoticia
  );

  // FUNCION PARA CAMBIAR PAGINA
  const paginacion = (pagina) => setPaginaActual(pagina);

  return (
    <section className="container">
      <Breadcrumb className="mt-4">
        <BreadcrumbItem>
          <Link to="/">Inicio</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/admin">Admin</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/admin/lista-noticias">Noticias Admin</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-center mt-5 mb-5 pb-3 fuenteTitulosAdmin fw-bold bordetabla">
        Administrador de Noticias
      </h1>

      <Table
        bordered
        hover
        responsive
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <thead className="bordetabla text-center bordetablacompleto">
          <tr className="text-rojo fs-5">
            <th className="text-center">#</th>
            <th className="text-center">Imagen</th>
            <th className="text-center">Titulo</th>
            <th className="text-center">Categoría</th>
            <th className="text-center pe-2">
              Acciones
              <Link to="/admin/agregar" className="text-decoration-none">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fs-1 ms-4 text-primary"
                />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((noticia) => (
            <CardsNoticiasAdmin
              key={noticia.id}
              noticia={noticia}
              consultaServer={props.consultaServer}
            ></CardsNoticiasAdmin>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center align-items-center">
        <Paginacion
          noticiasPorPagina={noticiasPorPagina}
          totalNoticias={props.noticias.length}
          paginacion={paginacion}
          paginaActual={paginaActual}
        ></Paginacion>
      </div>
    </section>
  );
};

export default NoticiasAdmin;
