import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
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
  const autorNoticiaRef = useRef("");
  const tituloNoticiaRef = useRef("");
  const bajadanoticiaRef = useRef("");
  const imagenNoticiaRef = useRef("");
  const leadnoticiaRef = useRef("");
  const cuerponoticiaRef = useRef("");
  const fechanoticiaRef = useRef("");
  const navegacion = useNavigate();

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        console.log(respuesta);
        setNoticia(dato);
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
        categoria,
      };

      try {
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noticiaModificada),
        });
        console.log(respuesta);
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
      console.log("error en la validacion de los datos");
    }
  };

  const handleDestacada = () => {
    if (destacada === false) {
      setDestacada(true);
      }else {
      setDestacada(false);
     }
  }

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
      <h1 className="mt-3 mb-5 pt-4 text-center">Editar Noticias</h1>
      <section className="container">
        <Form onSubmit={handleSubmit}>
          <div className="form-top">
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                defaultValue={noticia.autor}
                ref={autorNoticiaRef}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                required
                defaultValue={noticia.fechanoticia}
                ref={fechanoticiaRef}
                
              />
                 </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Noticia destacada"
                  onChange={(e) => handleDestacada()}
                  defaultChecked={noticia.destacada && noticia.destacada === true}
                  
                  

                />
            </Form.Group>
            <Form.Group className="mb-3 inputgrande">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                defaultValue={noticia.titulo}
                ref={tituloNoticiaRef}
                
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
                defaultValue={noticia.imagen}
                ref={imagenNoticiaRef}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
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
              defaultValue={noticia.bajadanoticia}
              ref={bajadanoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lead Noticia</Form.Label>
            <Form.Control
              as="textarea"
              required
              defaultValue={noticia.leadnoticia}
              ref={leadnoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cuerpo Noticia</Form.Label>
            <Form.Control
              as="textarea"
              required
              style={{ height: "250px" }}
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
      </section>
    </div>
  );
};

export default EditarNoticia;
