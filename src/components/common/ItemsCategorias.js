import React from "react";
import { Link } from "react-router-dom";
import '../pages/admin/admin.css'

const ItemsCategorias = (props) => {
  return (
    <li className="text-center ">
      <Link
        to={`/noticias/seccion/${props.categoria.categoria.toLowerCase()}`}
        className="text-decoration-none text-white my-1 mx-auto fsizefooter"
      >
        {props.categoria.categoria.toUpperCase()}
      </Link>
    </li>
  );
};

export default ItemsCategorias;
