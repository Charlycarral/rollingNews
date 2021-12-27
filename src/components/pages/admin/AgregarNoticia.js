import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { campoRequerido, validarImagen } from "../../Helpers/helpers";
import DatePicker from "react-datepicker";
import "./admin.css";
import "react-datepicker/dist/react-datepicker.css";

const AgregarNoticia = (props) => {
  const [autor, setAutor] = useState(" ");
  const [titulo, setTitulo] = useState(" ");
  const [bajadanoticia, setBajadaNoticia] = useState(" ");
  const [imagen, setImagen] = useState(" ");
  const [categoria, setCategoria] = useState(" ");
  const [leadnoticia, setLeadNoticia] = useState(" ");
  const [cuerponoticia, setCuerpoNoticia] = useState(" ");
  const [fechanoticia, setFechaNoticia] = useState(null);
  const [destacada, setDestacada] = useState(false);
  const [principal, setPrincipal] = useState(false);
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL_NOTIC;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("desde handleSubmit");
    // aca deberia validar los datos
    if (
      campoRequerido(autor) &&
      campoRequerido(titulo) &&
      campoRequerido(bajadanoticia) &&
      validarImagen(imagen) &&
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
            "Su noticia fue publicada con éxito",
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
      } catch(error) {
        console.log(error);
      }
    } else {
      setError(true)
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
      <h1 className="text-center mt-5 mb-4 pb-4 fuenteTitulosAdmin fw-bold bordetabla">
        Alta de Noticias
      </h1>

      <section className="container">
        <Form onSubmit={handleSubmit}>
          <div className="form-top">
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => setAutor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Fecha</Form.Label>
              <DatePicker
                className="p-1"
                selected={fechanoticia}
                onChange={(date) => setFechaNoticia(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
              ></DatePicker>
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
                onChange={(e) => setImagen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Categoria</Form.Label>
              <Form.Select onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Seleccione una categoria</option>
                {props.categorias.map((categoria) => (
                  <option
                    value={categoria.categoria.toLowerCase()}
                    key={categoria.id}
                  >
                    {categoria.categoria}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Bajada Noticia</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setBajadaNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lead Noticia</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setLeadNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cuerpo Noticia</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCuerpoNoticia(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <button className="btn-publish" type="submit">
              Publicar
            </button>
          </div>
        </Form>
        {error === true ? (
          <Alert variant="danger" className="mb-5">
            Debe completar todos los campos
          </Alert>
        ) : null}
      </section>
    </div>
  );
};

export default AgregarNoticia;
