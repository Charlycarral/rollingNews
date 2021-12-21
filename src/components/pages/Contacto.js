import React from "react";
import { Form, Button} from "react-bootstrap";

const Contacto = () => {
  return (
    <div>
      
      <Form className='container my-5 mb-4 col-md-6'>
      <br/>

        <h1 className='d-flex align-items-center'>CONTÁCTENOS</h1>
        <Form.Group className=' flex-column align-items'>
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control type='text'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;
