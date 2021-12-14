import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./admin.css";

const CardsNoticiasAdmin = (props) => {
  const eliminarNoticia = () => {
    console.log(props.noticia.id);
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
          const URL = process.env.REACT_APP_API_URL_NOTIC + "/" + props.noticia.id;

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
    <div className="col-sm-12 col-md-4 col-lg-3 my-3 ">
      <Card>
        <Link to={`/noticias/${props.noticia.id}`}>
          <Card.Img variant="top" src={props.noticia.imagen} />
        </Link>
        <Card.Body>
          <Card.Title>
            <h4>{props.noticia.titulo}</h4>
          </Card.Title>
          <Card.Text>
            <p>{props.noticia.leadnoticia}</p>
          </Card.Text>
          <div className=" d-flex justify-content-end align-items-center">
            <Link
              to={`/admin/editar/${props.noticia.id}`}
              className="mx-1 btn btn-editar"
            >
              Editar
            </Link>
            <Button variant="danger" onClick={() => eliminarNoticia()}>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsNoticiasAdmin;
