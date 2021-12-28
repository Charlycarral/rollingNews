import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import "./admin.css";


const CardsNoticiasAdmin = (props) => {
  const eliminarNoticia = () => {
   
    Swal.fire({
      title: "¿Esta seguro de eliminar este artículo?",
      text: "¡Una vez eliminado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL =
            process.env.REACT_APP_API_URL_NOTIC + "/" + props.noticia._id;

          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "¡Eliminado!",
              "El artículo fue correctamente eliminado.",
              "success"
            );
            props.consultaServer();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr className="text-center align-middle bordetablacompleto fuenteTitulosAdmin">
      
      <td>
        <Link to={`/noticias/${props.noticia._id}`}>
          <Card.Img
            variant="top"
            src={props.noticia.imagen}
            className="imagenCardsAdmin m-2 efectoCard shadow-sm"
          />
        </Link>
      </td>
      <td className="text-uppercase align-middle">
        <Link
          to={`/noticias/${props.noticia._id}`}
          className="text-decoration-none text-black"
        >
          {props.noticia.titulo}
        </Link>
      </td>
      <td className="text-uppercase">
        <div className="d-flex align-items-center justify-content-center">
          <Link
            to={`/noticias/seccion/${props.noticia.categoria}`}
            className="text-decoration-none text-black fw-bold"
          >
            {props.noticia.categoria}
          </Link>
        </div>
      </td>

      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/noticias/${props.noticia._id}`} className="">
            <FontAwesomeIcon icon={faEye} className="fs-1 m-2 text-gris" />
          </Link>
          <Link to={`/admin/editar/${props.noticia._id}`} className="">
            <FontAwesomeIcon icon={faEdit} className="fs-1 m-2 text-primary" />
          </Link>
          <Button variant="btn btn-link" onClick={() => eliminarNoticia()}>
            <FontAwesomeIcon
              icon={faTrash}
              className="fs-1 text-rojo"
            ></FontAwesomeIcon>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default CardsNoticiasAdmin;
