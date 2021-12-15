import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { campoRequerido, validarImagen } from "../../Helpers/helpers";
import "./admin.css";

const AgregarNoticia = (props) => {
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [bajadanoticia, setBajadaNoticia] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [leadnoticia, setLeadNoticia] = useState("");
  const [cuerponoticia, setCuerpoNoticia] = useState("");
  const [fechanoticia, setFechaNoticia] = useState("");
  const [destacada, setDestacada] = useState(false);
  const [principal, setPrincipal] = useState(false);
  const URL = process.env.REACT_APP_API_URL_NOTIC;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // aca deberia validar los datos
    if (
      campoRequerido(autor) &&
      campoRequerido(titulo) &&
      campoRequerido(bajadanoticia) &&
      campoRequerido(imagen) &&
      campoRequerido(categoria) &&
      campoRequerido(leadnoticia) &&
      campoRequerido(cuerponoticia) &&
      campoRequerido(fechanoticia)
    ) {
      const nuevaNoticia = {
        autor: autor,
        titulo: titulo,
        bajadanoticia: bajadanoticia,
        imagen: imagen,
        categoria: categoria,
        leadnoticia: leadnoticia,
        cuerponoticia: cuerponoticia,
        fechanoticia: fechanoticia,
        destacada: destacada,
        principal: principal,
      };
      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaNoticia),
        };
        const respuesta = await fetch(URL, parametros);
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Noticia Publicada",
            "Su noticia fue publicada con exito",
            "success"
          );
        } else {
          Swal.fire(
            "Noticia no agregada",
            "Existen problemas con el servidor",
            "error"
          );
        }
        e.target.reset();
        props.consultarServer();
      } catch (error) {
        console.log(error);
      }
    } else {
      ["danger"].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ));
      console.log("mensaje de error");
    }
  };

  const handleDestacada = () => {
    if (destacada === false) {
      setDestacada(true);
    } else {
      setDestacada(false);
    }
  };
  const handlePrincipal = () => {
    if (destacada === false) {
      setPrincipal(true);
    } else {
      setPrincipal(false);
    }
  };

  return (
    <div>
      <section className="container">
        <Breadcrumb className="mt-5 pt-2">
          <BreadcrumbItem>
            <Link to="/">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/admin">Admin</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/admin/lista-noticias">Alta Noticias</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <h1 className="my-4 pt-2 text-center">Alta de Noticias</h1>
      <section className="container">
        <Form onSubmit={handleSubmit}>
          <div className="form-top">
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                onChange={(e) => setAutor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                required
                onChange={(e) => setFechaNoticia(e.target.value)}
              />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Noticia Destacada"
                  onClick={(e) => handleDestacada(e.target.value)}
                 

                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Noticia Principal"
                  onClick={(e) => handlePrincipal(e.target.value)}
                 

                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3 inputgrande">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="form-top">
            <Form.Group className="mb-3 inputgrande">
              <Form.Label>Url Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                onChange={(e) => setImagen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                required
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Seleccione una categoria</option>
                <option value="actualidad">Actualidad</option>
                <option value="espectaculos">Espectaculo</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="deportes">Deportes</option>
                <option value="politica">Politica</option>
                <option value="economia">Economia</option>
                <option value="salud">Salud</option>
                <option value="fotografias">Fotografias</option>
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Bajada Noticia</Form.Label>
            <Form.Control
              as="textarea"
              required
              onChange={(e) => setBajadaNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lead Noticia</Form.Label>
            <Form.Control
              as="textarea"
              required
              onChange={(e) => setLeadNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cuerpo Noticia</Form.Label>
            <Form.Control
              as="textarea"
              required
              onChange={(e) => setCuerpoNoticia(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <button className="btn-publish" type="submit">
              Publicar
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default AgregarNoticia;
