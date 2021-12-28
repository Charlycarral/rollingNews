import NotiIndividual from "./NotiIndividual.js";
import {Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Inicio.css";

const NoticiasCategoriaInicio = (props) => {
  return (
    
      <div className="container">
        {props.categoria[0] && (
          <div className="mt-2 border-bottom ">
            <div className="d-flex justify-content-between border-bottom fw-bold fuenteRolling">
              
              <Link 
                className="text-uppercase text-decoration-none text-secondary"
                to={`/noticias/seccion/${props.categoria[0].categoria}`}
              >
                {" "}
                {props.categoria[0].categoria}
              </Link>

              <Link 
                className="text-uppercase text-decoration-none text-danger fs-6 fuenteRolling"
                to={`/noticias/seccion/${props.categoria[0].categoria}`}
              >
                {" "}
                ver mas{" "}
              </Link>
            </div>
              <Row>
                {props.categoria.map((categoria) => (
                  <Col xs={12} md={6} lg={4}>
                  <NotiIndividual
                    noticia={categoria}
                    key={categoria._id}
                  ></NotiIndividual>
                  </Col>
                ))}
              </Row>
          </div>
        )}
      </div>
    
  );
};

export default NoticiasCategoriaInicio;
