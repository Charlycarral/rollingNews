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
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [noticia, setNoticia] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // aca deberia validar los datos
    if (
      campoRequerido(autor) &&
      campoRequerido(titulo) &&
      campoRequerido(imagen) &&
      campoRequerido(categoria) &&
      campoRequerido(descripcion) &&
      campoRequerido(noticia)
    ) {
      const nuevaNoticia = {
        autor: autor,
        titulo: titulo,
        imagen: imagen,
        categoria: categoria,
        descripcion: descripcion,
        noticia: noticia,
      };
      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaNoticia),
        };
        const respuesta = await fetch(URL, parametros
        );
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Noticia Publicada",
            "Su noticia fue publicada con exito",
            "success"
          );
        }else {
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
      ['danger'].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ));
      console.log("mensaje de error");
    }
  };

  return (
    <div>
      <section className="container">
        <Breadcrumb className="mt-4">
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
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              required
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Noticia completa</Form.Label>
            <Form.Control
              as="textarea"
              required
              onChange={(e) => setNoticia(e.target.value)}
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
