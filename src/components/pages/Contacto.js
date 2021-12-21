import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {validarNombre, validarCorreo, campoRequerido} from '../Helpers/helpers';
import Swal from 'sweetalert2';

const Contacto = (props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorContact, setErrorContact] =useState(false);
  const URLmsg = process.env.REACT_APP_API_URL_MSG;

  const handleSubmit= async (e)=> {
    e.preventDefault();
    //validar los input
    if ( validarNombre(nombre) && validarCorreo(email) && campoRequerido(mensaje)
    ) {
      setErrorContact(false);
      //crear un objeto con mensajes
      const nuevoMensaje = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
      }
      console.log(nuevoMensaje);
      //enviar el objeto mensaje a la API
      try {
        const parametros = {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(nuevoMensaje)
        }
        const respuesta = await fetch(URLmsg,parametros);
        // console.log(respuesta);
        if(respuesta.status === 201) { 
          // mostrar al usuario un msj de operacion exitosa
          Swal.fire(
            'Mensaje enviado con éxito!',
            'El mensaje fue enviado con éxito',
            'success'
          )
          // resetear el formulario
          e.target.reset();
          //consultar los datos de la api
        } else{

        }
      } catch (errorContact) {

      }
    } else {
      //si falla la validacion del form mostrar el mensaje
      setErrorContact(true)
    }
  }
    return (
    <container>
      <Form className="container my-5 mb-4 col-md-6" onSubmit={handleSubmit}>

        <h1 className="d-flex align-items-center">CONTÁCTENOS</h1>
        <Form.Group className=" flex-column align-items">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type="text"  onChange={(e)=>setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e)=>setMensaje(e.target.value)} />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      {errorContact === true ? (
        <Alert variant="danger" className="mb-5">
          Debe completar todos los campos
        </Alert>
      ) : null}
    </container>
  );
};

export default Contacto;