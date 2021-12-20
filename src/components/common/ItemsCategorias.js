import React from "react";
import { Link } from "react-router-dom";

const ItemsCategorias = (props) => {
  return (
    <li className="text-center my-2">
      <Link
        to={`/noticias/seccion/${props.categoria.categoria.toLowerCase()}`}
        className="text-decoration-none text-white my-1"
      >
        {props.categoria.categoria.toUpperCase()}
      </Link>
    </li>
  );
};

export default ItemsCategorias;
