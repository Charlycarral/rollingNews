import NotiIndividual from "./NotiIndividual.js";
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import "./Inicio.css";

const Suscriptores = (props) => {
  return (
    <section className="bgsuscriptores py-3">
      <div className="container ">
        {props.categoria[0] && (
          <div className="mt-2">
            <div className="d-flex justify-content-between border-bottom fw-bold">
              <Link
                className="text-uppercase text-decoration-none text-white"
                to={`/noticias/seccion/${props.categoria[0].categoria}`}
              >
                {" "}
                {props.categoria[0].categoria}
              </Link>

              <Link
                className="text-uppercase text-decoration-none fw-bold text-black fs-6"
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
    </section>
  );
};

export default Suscriptores;
