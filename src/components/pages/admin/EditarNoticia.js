import React, {useState, useEffect, useRef} from "react";
import { Form } from "react-bootstrap";
import "./admin.css";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import {campoRequerido} from "../../Helpers/helpers"
import Swal from "sweetalert2";

const EditarNoticia = (props) => {
   const {id} = useParams()
   const [noticia,setNoticia]= useState({});
   const URL = process.env.REACT_APP_API_URL + "/" +id;
   const [categoria, setCategoria]= useState('');
   const autorNoticiaRef = useRef('');
   const tituloNoticiaRef = useRef('');
   const imagenNoticiaRef = useRef('');
      const descripcionNoticiaRef = useRef('');
   const completaNoticiaRef = useRef('');
   const navegacion = useNavigate();
    

   useEffect(async()=>{
     try{
      const respuesta = await fetch(URL);
      if (respuesta.status === 200){
        const dato = await respuesta.json();
        console.log(respuesta)
        setNoticia(dato);
        setCategoria(dato.categoria)
      }
     }catch(error){
       console.log(error)
     } 
   }, []); 

const handleSubmit = async(e)=>{
  e.preventDefault();
  if (campoRequerido(autorNoticiaRef.current.value) && campoRequerido(tituloNoticiaRef.current.value) && campoRequerido(categoria) && campoRequerido(descripcionNoticiaRef.current.value) && campoRequerido(completaNoticiaRef.current.value)
  ) {
    const noticiaModificada={
        autor: autorNoticiaRef.current.value,
        titulo: tituloNoticiaRef.current.value,
        imagen: imagenNoticiaRef.current.value,
        descripcion: descripcionNoticiaRef.current.value,
        noticia: completaNoticiaRef.current.value,
        categoria
    }

try{
  const respuesta = await fetch(URL, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(noticiaModificada)
  })
console.log(respuesta);
if(await respuesta.status === 200){
  Swal.fire('Articulo Modificado', 'El articulo fue corrrectamente modificado', 'success')
  props.consultaServer()
  navegacion('/admin/lista-noticias')
}
}catch(error){
  console.log(error);
}
  
  }else{
    console.log("error en la validacion de los datos")
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
              defaultValue={noticia.descripcion}
              ref={descripcionNoticiaRef}
              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Noticia completa</Form.Label>
            <Form.Control
              as="textarea"
              required
              style={{ height: '250px'}}
              defaultValue={noticia.noticia}
              ref={completaNoticiaRef}
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
