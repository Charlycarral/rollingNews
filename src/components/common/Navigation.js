import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import messi from '../img/messi-balon-de-oro_862x485.jpg'
const Navigation = () => {

  return (
    <>
      <Navbar expand={false} fixed="top" id="Nav">
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id="navNewsCanvas"
            placement="start"
            
          >
            <Offcanvas.Header closeButton className='btn-close-white'></Offcanvas.Header>
            <section>
              <div className="container my-5 text-center ">
                <Nav className="flex-row pe-3 row mt-5  justify-content-center">
                  <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                    <h3 className="text-white">Secciones</h3>
                    <hr />
                    <section className="d-flex flex-column">
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Actualidad
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Espectaculos
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Tecnologia
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Deportes
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Politica
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Economia
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Salud
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Fotografias
                      </Link>
                    </section>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                    <h3 className="text-white">Servicios</h3>
                    <hr />
                    <section className="d-flex flex-column">
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Clima
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Monedas extrangeras
                      </Link>
                    </section>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                    <h3 className="text-white">Institucional</h3>
                    <hr />
                    <section className="d-flex flex-column">
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Contacto
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Acerca de nosotros
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-white my-1"
                      >
                        Publicidad
                      </Link>
                    </section>
                  </div>
                </Nav>
              </div>
              <article className="footerNav text-white">
                <h3 className="text-center">Suscribite a RollingNews</h3>
                <div className="Form-nav">
                  <Form>
                    <Form.Group className="my-3">
                      <Form.Control
                        type="email"
                        id="inputNav"
                        placeholder="Ingresa tu mail"
                      />
                    </Form.Group>
                  </Form>
                  <div>
                    <a className="text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        fill="currentColor"
                        class="bi bi-envelope ms-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </section>
          </Navbar.Offcanvas>
          <Link to='' className='text-decoration-none text-dark'>Logo RollingNews</Link>
          <Link to='/login' id="botonNav">Ingresar</Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
