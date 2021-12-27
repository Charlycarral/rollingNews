import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Spinner, Carousel } from "react-bootstrap";

const ApiMonedas = () => {
  const [dolar, setDolar] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    consultarAPIMonedas();
  }, []);

  const consultarAPIMonedas = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const respuestas = await respuesta.json();
      setDolar(respuestas);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente =
    cargando === true ? (
      <Spinner animation="border" size="sm"></Spinner>
    ) : (
      <div id="dolar" className="ps-5 w-50 fuente fuenteRolling">
        <Carousel indicators={false} controls={false} interval="3000"  className="ps-4 mt-3">
          <Carousel.Item>
            <p>
              Dólar Oficial: $ {dolar[0]?.casa.compra} / $ {dolar[0]?.casa.venta}
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Dólar Blue: $ {dolar[1]?.casa.compra} / $ {dolar[1]?.casa.venta}
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Dólar CCL: $ {dolar[3]?.casa.compra} / $ {dolar[3]?.casa.venta}
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    );

  return <Fragment>{mostrarComponente}</Fragment>;
};

export default ApiMonedas;
