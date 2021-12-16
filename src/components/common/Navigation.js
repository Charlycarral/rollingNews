import React from "react";
import { Navbar, Nav, Container, Offcanvas, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logoRollingBlanco.svg";
import "../pages/Login.css";
import ItemsCategorias from "./ItemsCategorias";

const Navigation = (props) => {
<<<<<<< HEAD

  const salirLogin = () =>{
    props.setLoginCtr(false);
  }

=======
>>>>>>> e440852822521f9a0bfbb071b6914e77a7494482
  return (
    <>
      <Navbar expand={false} id="Nav">
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
                      <section className="d-flex flex-column ">
                        {props.categorias.map((categoria) => (
                          <ItemsCategorias
                            key={categoria.id}
                            categoria={categoria}
                          ></ItemsCategorias>
                        ))}
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
            <Link to="/suscribe" id="botonSub" className="w-auto p-2" >
              Suscribite
            </Link>
            </div>

            { props.loginCtr === false ? (<div className="colorFuenteGris" >
           <Link to="/login" id="botonIngresar" className="w-auto p-2 colorFuenteGris">
               Ingresar </Link>
            </div>) : (<div className="colorFuenteGris" >
           <Link to="/" id="botonIngresar" className="w-auto p-2 colorFuenteGris" onClick={() => {salirLogin()}}>
               Salir </Link>
            </div>)}
          
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
