import React from "react";
import { ListGroup,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
        }).then(async(result) => {
          if (result.isConfirmed) {
            try {
              const URL_c = process.env.REACT_APP_API_URL_CAT + "/" + props.categoria.id;
    
              const respuesta = await fetch(URL_c,{
                method: "DELETE",
                headers:{
                  "Content-Type":"application/json"
                }
              });
              
              
              if(respuesta.status === 200){
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

      <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span className="mx-3 ">{(props.categoria.categoria).toUpperCase()}</span>
          <div><Button variant="danger" onClick={eliminarCategoria}>Borrar</Button>
               <Link to="/" className="btn btn-warning m-2">Editar</Link>
               <Link to="/" className="btn btn-primary">Mostrar</Link></div>
      </ListGroup.Item>

  );
};

export default ItemListaCategoria;
