import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotiIndividual = (props) => {
  return (
    <div id="indiv" className="ms-3 ps-1">
      <Card style={{width: "19rem"}}>
        <Link to={`/noticias/${props.noticia._id}`} href="categoria">
          <Card.Img variant="top" src={props.noticia.imagen} />
        </Link>

        <Card.Body>
        <Link to={`/noticias/${props.noticia._id}`} className="text-decoration-none text-black fs-4" href="categoria">
        <Card.Title>{props.noticia.titulo}</Card.Title>
        </Link>
          
          <Link to={`/noticias/${props.noticia._id}`} className="text-decoration-none text-black lead fs-6" href="categoria">
          <Card.Text>{props.noticia.bajadanoticia}</Card.Text>
        </Link>
          
          <Button variant="link text-decoration-none text-secondary">
            {props.noticia.autor}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotiIndividual;
