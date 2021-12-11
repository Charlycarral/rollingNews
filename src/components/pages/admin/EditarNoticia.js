import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import "./admin.css";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const EditarNoticia = (props) => {
   const {id} = useParams();
   const [noticia, setNoticia] = useEffect({});
   const [categoria, setCategoria] = useState('');
   const URL = process.env.REACT_APP_API_URL + "/" +id;

   useEffect(async()=>{
     try{
      const respuesta = await fetch(URL);
      if (respuesta.status === 200){
        const dato = await respuesta.json();
        setNoticia(dato);
        setCategoria(dato.categoria)
      }
     }catch(error){
       console.log(error)
     } 
     
   }, []); 






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
      <h1 className="my-5 pt-4 text-center">Editar Noticias</h1>
      <section className="container">
        <Form>
          <div className="form-top">
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                defaultValue={noticia.autorNoticia}         
              />
            </Form.Group>
            <Form.Group className="mb-3 inputgrande">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                defaultValue={noticia.tituloNoticia} 
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
                defaultValue={noticia.urlNoticia}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputchico">
              <Form.Label>Categoria</Form.Label>
              <Form.Select value={categoria} onChange={(e)=>setCategoria(e.target.value)} required>
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
              defaultValue={noticia.descripcionNoticia}
              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Noticia completa</Form.Label>
            <Form.Control
              as="textarea"
              required
              defaultValue={noticia.completaNoticia}
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
