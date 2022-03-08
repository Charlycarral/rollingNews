import React, { useState, useEffect, useRef } from "react";
import { Form, Alert } from "react-bootstrap";
import "./admin.css";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { campoRequerido } from "../../Helpers/helpers";
import Swal from "sweetalert2";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState({});
  const URL = process.env.REACT_APP_API_URL_NOTIC + "/" + id;
  const [categoria, setCategoria] = useState("");
  const [destacada, setDestacada] = useState(false);
  const [principal, setPrincipal] = useState(false);
  const [fecha, setFecha] = useState("");
  const autorNoticiaRef = useRef("");
  const tituloNoticiaRef = useRef("");
  const bajadanoticiaRef = useRef("");
  const imagenNoticiaRef = useRef("");
  const leadnoticiaRef = useRef("");
  const cuerponoticiaRef = useRef("");
  const fechanoticiaRef = useRef(null);
  const navegacion = useNavigate();
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        const fechaN = new Date(dato.fechanoticia);
        const fechaSub = fechaN.toLocaleDateString();
        setNoticia(dato);
        setFecha(fechaSub);
        setCategoria(dato.categoria);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(autorNoticiaRef.current.value) &&
      campoRequerido(tituloNoticiaRef.current.value) &&
      campoRequerido(bajadanoticiaRef.current.value) &&
      campoRequerido(categoria) &&
      campoRequerido(leadnoticiaRef.current.value) &&
      campoRequerido(fechanoticiaRef.current.value) &&
      campoRequerido(cuerponoticiaRef.current.value)
    ) {
      const noticiaModificada = {
        autor: autorNoticiaRef.current.value,
        titulo: tituloNoticiaRef.current.value,
        bajadanoticia: bajadanoticiaRef.current.value,
        imagen: imagenNoticiaRef.current.value,
        leadnoticia: leadnoticiaRef.current.value,
        cuerponoticia: cuerponoticiaRef.current.value,
        fechanoticia: fechanoticiaRef.current.value,
        destacada,
        principal,
        categoria,
      };

      try {
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noticiaModificada),
        });
        if ((await respuesta.status) === 200) {
          Swal.fire(
            "Articulo Modificado",
            "El articulo fue corrrectamente modificado",
            "success"
          );
          props.consultaServer();
          navegacion("/admin/lista-noticias");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
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
        <Breadcrumb className="mt-4">
          <BreadcrumbItem>
            <Link to="/">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/admin">Admin</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/admin/lista-noticias">Edicion Noticia</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <h1 className="text-center mt-5 mb-2 fuenteTitulosAdmin fw-bold">
        Editar Noticias
      </h1>
      <hr className="mb-5 text-rojo" />
      
      <section className="container fluid">
        <Form onSubmit={handleSubmit} className="responsive">
          <div className="form-top d-flex justify-content-between">
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                maxlength='100'
                defaultValue={noticia.autor}
                ref={autorNoticiaRef}
                className="imputAutor"
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                min="1980-01-01"
                max="{{date | date:'yyyy-MM-dd'}}"
                placeholder=""
                defaultValue={fecha}
                ref={fechanoticiaRef}
                className="imputFecha"
                disabled = {true}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Noticia Destacada"
                onChange={(e) => handleDestacada()}
                defaultChecked={noticia.destacada && noticia.destacada === true}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Noticia Principal"
                onChange={(e) => handlePrincipal()}
                defaultChecked={noticia.destacada && noticia.destacada === true}
              />
            </Form.Group>
          </div>
          <div className="form-top">
            <Form.Group className="mb-3 inputgrande">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                maxlength='200'
                defaultValue={noticia.titulo}
                ref={tituloNoticiaRef}
                className="imputTitulo"
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Categoria</Form.Label>
              <Form.Select onChange={(e) => setCategoria(e.target.value)}>
                <option value="" className="text-uppercase">
                  Seleccione una categoria
                </option>
                {props.categorias.map((categoria) => (
                  <option
                    className="text-uppercase"
                    value={categoria.categoria.toLowerCase()}
                    key={categoria.id}
                  >
                    {categoria.categoria}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="mb-3 inputgrande">
            <Form.Label>Url Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              maxlength='500'
              defaultValue={noticia.imagen}
              ref={imagenNoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bajada Noticia</Form.Label>
            <Form.Control
              as="textarea"
              maxlength='500'
              defaultValue={noticia.bajadanoticia}
              ref={bajadanoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lead Noticia</Form.Label>
            <Form.Control
              as="textarea"
              maxlength='500'
              defaultValue={noticia.leadnoticia}
              ref={leadnoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cuerpo Noticia</Form.Label>
            <Form.Control
              as="textarea"
              maxlength='2000'
              style={{ height: "200px" }}
              defaultValue={noticia.cuerponoticia}
              ref={cuerponoticiaRef}
            />
          </Form.Group>
          <div className="text-center">
            <button className="btn-publish" type="submit">
              Publicar edicion
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

export default EditarNoticia;
