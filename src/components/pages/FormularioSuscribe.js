import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import { campoRequerido, validarCorreo} from "../Helpers/helpers";

const FormularioSuscribe = (props) => {
    const [emailUsuario, setEmailUsuario] = useState([]);
    const [nombreUsuario, setNombreUsuario] = useState([]);
    const [contrasenaUsuario, setContrasenaUsuario] = useState([]);
    const [contrasenaUsuario_, setContrasenaUsuario_] = useState([]);
    const URL = process.env.REACT_APP_API_URL_USER;
    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validarCorreo(emailUsuario) && campoRequerido(nombreUsuario) && campoRequerido(contrasenaUsuario) 
            && campoRequerido(contrasenaUsuario_)){
                if (contrasenaUsuario === contrasenaUsuario_){
                    // crear objeto Usuario
                    const nuevoUsuario = {
                        "email": emailUsuario,
                        "nombre": nombreUsuario,
                        "contrasena": contrasenaUsuario
                    };
                    
                    let existe = props.usuarios.find((usuario) => {return usuario.email === nuevoUsuario.email});
                    console.log(existe)
                    if (existe === undefined) {
                      // enviar objeto a la API
                      try {
                        const parametros = {
                        method: "POST",
                        headers: {
                          "Content-Type":"application/json"
                        },
                        body: JSON.stringify(nuevoUsuario)
                       }
        
                      const respuesta = await fetch(URL, parametros);
                      if (respuesta.status === 201) {
                          Swal.fire(
                          'Buen trabajo!',
                          'Usuario agregado correctamente',
                          'success'
                        );
                        //  actualizar state de los usuarios registrados
                        props.consultarUser();
                        // resetear formulario
                        e.target.reset();
                       // redireccionar
                       navegacion('/login')
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ocurrió un error. Vuelva a intentarlo.',
                            footer: '<a href="">Más informaci\'on?</a>'
                        });
                    }
                    } catch (error) {
                      console.log(error)
                    }
                    }else{
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El usuario ya existe!',
                        footer: '<a href="">Más informaci\'on?</a>'
                      })

                    }
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Las contraseñas no son iguales',
                        footer: '<a href="">Más informaci\'on?</a>'
                      })
                }
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios!',
                footer: '<a href="">Más informaci\'on?</a>'
              });
        
            }
    };

    return (
      <div className="divBienvenidos bg-dark">
        <h2 className="text-white mt-1 mb-1 fs-5 text-center">REGISTRATE</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3 text-white">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Su email" onChange={(e) => setEmailUsuario(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="my-3 text-white">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Su nombre" onChange={(e) => setNombreUsuario(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="my-3 text-white">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContrasenaUsuario(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="my-3 text-white">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContrasenaUsuario_(e.target.value)}/>
          </Form.Group>
  
          <Button variant="danger w-100 mt-5 mb-2" type="submit">
            REGISTRAR
          </Button>
        </Form>
  
        <hr className="mt-2 text-white" />
      </div>
    );
  };

  export default FormularioSuscribe;
