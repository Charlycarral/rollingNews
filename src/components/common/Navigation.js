import React from "react";
import { Navbar, Nav, Container, Offcanvas, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logoRollingBlanco.svg";
import "../pages/Login.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand={false} id="Nav" >
        <Container fluid className="fixed-top bgNavbar pb-2">
          <section>
            <Navbar.Toggle />
            <Navbar.Offcanvas id="navNewsCanvas" placement="start">
              <Offcanvas.Header
                closeButton
                className="btn-close-dark centrado"
              ></Offcanvas.Header>
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
                          Actualidad{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Espectaculos{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Tecnologia{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Deportes{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Politica{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Economia{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Salud{" "}
                        </Link>
                        <Link
                          to=""
                          className="text-decoration-none text-white my-1"
                        >
                          Fotografias{" "}
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

              </section>
            </Navbar.Offcanvas>
          </section>
            <Link
              to="/"
              className=" d-flex justify-content-center text-decoration-none text-white logoNav"
            >
              <img src={logo} alt="logo rolling news" className="mt-1 w-50" />
            </Link>
          <div className="d-flex justify-content-center">
            <div >
            <Link to="/" id="botonSub" className="w-auto p-2" >
              Suscribite
            </Link>

            </div>
            
            <div className="colorFuenteGris" >
            <Link to="/login" id="botonIngresar" className="w-auto p-2 colorFuenteGris">
               Ingresar
            </Link>

            </div>
            
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
