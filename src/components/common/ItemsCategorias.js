import React from "react";
import { Link } from "react-router-dom";

const ItemsCategorias = (props) => {
  return (
    <li className="text-center ">
      <Link
        to={`/noticias/seccion/${props.categoria.categoria.toLowerCase()}`}
        className="text-decoration-none text-white my-1 mx-auto"
      >
        {props.categoria.categoria.toUpperCase()}
      </Link>
    </li>
  );
};

export default ItemsCategorias;
