import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
const ItemListaCategoria = (props) => {
  const eliminarCategoria = () => {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar la categoria?",
      text: "Si elimina no podra recuperarla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL_c =
            process.env.REACT_APP_API_URL_CAT + "/" + props.categoria.id;

          const respuesta = await fetch(URL_c, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (respuesta.status === 200) {
            Swal.fire(
              "Categoria eliminada",
              "La categoria fue eliminada correctamente",
              "success"
            );
            props.consultarCat();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center w-50">
      <Link
        to={`/noticias/seccion/${props.categoria.categoria.toLowerCase()}`}
        className="btn "
      >
        <span className="mx-3 fs-4">
          {props.categoria.categoria.toUpperCase()}
        </span>
      </Link>

      <div>
        <Link
          to={`/noticias/seccion/${props.categoria.categoria.toLowerCase()}`}
          className="btn "
        >
          <FontAwesomeIcon icon={faEye} className="fs-1 m-2 text-gris" />
        </Link>
        <Link
          to={`/admin/editar-categoria/${props.categoria.id}`}
          className="btn btn-link m-2"
        >
          <FontAwesomeIcon icon={faEdit} className="fs-1 m-2 text-primary" />
        </Link>
        <Button variant="btn btn-link" onClick={eliminarCategoria}>
          <FontAwesomeIcon
            icon={faTrash}
            className="fs-1 text-rojo"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemListaCategoria;
