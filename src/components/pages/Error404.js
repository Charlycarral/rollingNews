import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Aboutus.css";


const Error404 = () => {
  return (
    <div class="pt-5 bgerro fuenteError">
      <div className="d-flex flex-column   mt-4 align-items-center container fluid">
        <h2 className="mt-5 text-black fw-bold  text-center">
          Hubo un problema para encontrar la pagina... Ups
        </h2>
        <img
          id="gif"
          src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
          alt="gif"
          className="w-50"
        />
        <p className="fs-4 text-center">
          Es probable que el link que seguiste este roto o no exista...
        </p>

        <Link className="mb-5" to="/">
          {" "}
          <Button variant="primary">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
