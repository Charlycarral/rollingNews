import React from 'react';
import { Form} from "react-bootstrap";
import './admin.css';

const EditarNoticia = () => {
    return (
        <div>
        <h1 className="my-5 pt-4 text-center">Editar Noticias</h1>
        <section className="container">
          <Form>
              <div className='form-top'>
            <Form.Group className="mb-3 autor">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3 titulo" >
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="" required/>
            </Form.Group>
              </div>
            <Form.Group className="mb-3" >
              <Form.Label>Url Imagen</Form.Label>
              <Form.Control type="text" placeholder="" required/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Noticia completa</Form.Label>
              <Form.Control as="textarea" required/>
            </Form.Group>
            <div className='text-center'>
            <button className='btn-publish' type="submit">
              Publicar
            </button>
            </div>
          </Form>
        </section>
      </div>
    );
};

export default EditarNoticia;