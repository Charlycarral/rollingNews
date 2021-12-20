import React from "react";
import { Pagination } from "react-bootstrap";

const Paginacion = (props) => {
  let active = props.paginaActual;
  let pagina = [];
  for (let number = 1; number <= Math.ceil(props.totalNoticias / props.noticiasPorPagina); number++) {
    pagina.push(
      <Pagination.Item key={number} active={number === active} onClick={()=> props.paginacion(number)}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{pagina}</Pagination>
      <br />
    </div>
  );
  return <div>{paginationBasic}</div>;
};

export default Paginacion;
