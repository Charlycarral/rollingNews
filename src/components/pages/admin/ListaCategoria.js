import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";


const ListaCategoria = () => {
  return (
    <div className=" container my-5 d-flex justify-content-center">
      <div>
        <h1 className="my-5 text-center pt-5">Lista de Categorías</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="px-5 py-2 fs-4">Categorías</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="p-3 d-flex justify-content-center fs-4">
                    Economia
                </td>
               <td>
               <Button variant="danger">Borrar</Button>{' '}
               <Link to="/" className="btn btn-warning m-2">Editar</Link>
               <Link to="/" className="btn btn-primary">Mostrar</Link>

               </td>
         
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListaCategoria;
