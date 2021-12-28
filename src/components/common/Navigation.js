import React from "react";
import { Navbar, Nav, Container, Offcanvas, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logoRollingBlanco.svg";
import "../pages/Login.css";
import ItemsCategorias from "./ItemsCategorias";

const Navigation = (props) => {
  const salirLogin = () => {
    props.setLoginCtr(false);
    props.setLoginCtrAd(false);
  };

  const categoriasPrincipales = props.categorias.slice(0, 4);
  const categoriasSecundarias = props.categorias.slice(4);

  return (
    <>
      <Navbar expand={false} id="Nav" collapseOnSelect={false}>
        <Container fluid className="fixed-top bgNavbar pb-2">
          <section>
            <Navbar.Toggle />
            <Navbar.Offcanvas id="navNewsCanvas" placement="start">
              <Offcanvas.Header
                closeButton
                className="btn-close-dark centrado"
              ></Offcanvas.Header>

              <section className="fuentenav">
                <div className="container my-5 text-center ">
                  <Nav className="flex-row pe-3 row mt-5  justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                      <h3 className="text-white text-uppercase ">Secciones</h3>
                      <hr className="colorRojo"/>
                      <section className="d-flex flex-column ">
                        {categoriasPrincipales.map((categoria) => (
                          <ItemsCategorias
                            key={categoria.id}
                            categoria={categoria}
                          ></ItemsCategorias>
                        ))}
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="secondary"
                            id="dropdown-basic"
                            className="border-0"
                          >
                            MAS CATEGORIAS...
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="bgNavbartras">
                            {categoriasSecundarias.map((categoria) => (
                              <Dropdown.Item href="#/action-1">
                                <ItemsCategorias
                                  key={categoria.id}
                                  categoria={categoria}
                                ></ItemsCategorias>
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </section>
                    </div>

                    {props.loginCtrAd === false ? (
                      <div className="col-sm-1 col-md-1 col-lg-1"></div>
                    ) : (
                      <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                        <h3 className="text-white text-uppercase">
                          administrador
                        </h3>
                        <hr className="colorRojo" />
                        <section className="d-flex flex-column">
                          <Link
                            to="/admin/lista-noticias"
                            className="text-decoration-none text-white my-1 text-uppercase"
                          >
                            administrador de noticias
                          </Link>
                          <Link
                            to="/admin/agregar"
                            className="text-decoration-none text-white my-1 text-uppercase"
                          >
                            nueva noticia
                          </Link>
                          <Link
                            to="/admin/categorias"
                            className="text-decoration-none text-white my-1 text-uppercase"
                          >
                            Categorías
                          </Link>
                          <Link
                            to="/admin/agregar-categoria"
                            className="text-decoration-none text-white my-1 text-uppercase"
                          >
                            Nueva categoría
                          </Link>
                        </section>
                      </div>
                    )}

                    <div className="col-sm-12 col-md-6 col-lg-4 text-white">
                      <h3 className="text-white text-uppercase">
                        Institucional
                      </h3>
                      <hr className="colorRojo" />
                      <section className="d-flex flex-column">
                        <Link
                          to="/institucional/contacto"
                          className="text-decoration-none text-white my-1 text-uppercase"
                        >
                          Contacto
                        </Link>
                        <Link
                          to="/institucional/acerca-de"
                          className="text-decoration-none text-white my-1 text-uppercase"
                        >
                          Acerca de nosotros
                        </Link>
                        <Link
                          to="/institucional/politicas-de-privacidad"
                          className="text-decoration-none text-white my-1 text-uppercase"
                        >
                          Políticas de privacidad
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
            <img src={logo} alt="logo rolling news" className="w-50 wlogo" />
          </Link>

          <div className="d-flex justify-content-start ms-5 ps-5 mt-2">
            <div>
              <Link
                to="/suscribe"
                id="botonSub"
                className="w-auto p-2 fuentenav"
              >
                Suscribite
              </Link>
            </div>

            {props.loginCtr === false ? (
              <div className="colorFuenteGris">
                <Link
                  to="/login"
                  id="botonIngresar"
                  className="w-auto p-2 colorFuenteGris fuentenav"
                >
                  Ingresar{" "}
                </Link>
              </div>
            ) : (
              <div className="colorFuenteGris">
                <Link
                  to="/"
                  id="botonIngresar"
                  className="w-auto p-2 colorFuenteGris "
                  onClick={() => {
                    salirLogin();
                  }}
                >
                  Salir{" "}
                </Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
