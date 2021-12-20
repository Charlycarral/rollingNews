import React, {useState, useEffect} from "react";
import { Breadcrumb, BreadcrumbItem, Table } from "react-bootstrap";
import CardsNoticiasAdmin from "./CardsNoticiasAdmin";
import { Link } from "react-router-dom";
import "./admin.css";

const NoticiasAdmin = (props) => {

const [noticias, setnoticias] = useState([]);
const [paginaActual, setPaginaActual] = useState(1);
const [noticiasPorPagina, setNoticiasPorPagina] = useState(15);

props.consultaServer();

const indexUltimaNoticia = paginaActual * noticiasPorPagina;
const indexPrimerNoticia = indexUltimaNoticia - noticiasPorPagina;
const currentPost = noticias.slice(indexPrimerNoticia, indexUltimaNoticia);

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

      <h1 className="text-center mt-5 mb-2 fuenteTitulosAdmin fw-bold">
        Administrador de Noticias
      </h1>
      <hr className="mb-5 text-rojo" />
      <Table bordered hover responsive className="shadow-lg p-3 mb-5 bg-body rounded">
        <thead className="bordetabla text-center bordetablacompleto">
          <tr className="text-rojo fs-5">
            <th className="text-center">#</th>
            <th className="text-center">Imagen</th>
            <th className="text-center">Titulo</th>
            <th className="text-center">Categoría</th>
            <th className="text-center">Botones</th>
          </tr>
        </thead>
        <tbody>
        
        {props.noticias.map((noticia) => (
          <CardsNoticiasAdmin
            key={noticia.id}
            noticia={noticia}
            consultaServer={props.consultaServer}
          ></CardsNoticiasAdmin>
        ))}
     
       
        </tbody>
      </Table>

   
    </section>
  );
};

export default NoticiasAdmin;
