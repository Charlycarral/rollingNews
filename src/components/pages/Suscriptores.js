import NotiIndividual from "./NotiIndividual.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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

            <div className="row justify-content-center mb-5">
              <div className="mt-3 col-sm-12 col-lg-4 d-flex justify-content-center">
                {props.categoria.map((categoria) => (
                  <NotiIndividual
                    noticia={categoria}
                    key={categoria._id}
                  ></NotiIndividual>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Suscriptores;
