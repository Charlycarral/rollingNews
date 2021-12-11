import React from "react";
import { Card, Button } from "react-bootstrap";
import Market from "../../img/market.jpg";

const NoticiasCategoriaInicio = () => {
  return (
    <section className="">
      <div className="mt-2 d-flex border-bottom border-2 align-items-end">
        <Button variant="link" className="botonCategoria">
          CATEGORIA
        </Button>
        <Button variant="link" className="botonCategoria">
          VER MAS
        </Button>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="mt-3 col-sm-12 col-lg-4 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Market} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <Button variant="link text-decoration-none text-secondary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="mt-3 col-sm-12 col-lg-4 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Market} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <Button variant="link text-decoration-none text-secondary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="mt-3 col-sm-12 col-lg-4 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Market} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the
              </Card.Text>
              <Button variant="link text-decoration-none text-secondary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NoticiasCategoriaInicio;
