import React, { Fragment, useState, useEffect } from "react";
import InfoClima from "./InfoClima";
import { Spinner } from "react-bootstrap";
import "./Clima.css"


const ConsultarClima = () => {
  const [infoClima, setinfoClima] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    consultaApiClima();
  }, []);

  const consultaApiClima = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=-26.8241&lon=-65.2226&lang=es&units=metric&exclude=minutely,hourly,alerts&appid=7353cb6726135d4f6d97bab9c1a6f888"
      );
      const dato = await respuesta.json();
      setinfoClima(dato);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComp =
    cargando === true ? (
      <Spinner animation="border" size="sm"></Spinner>
    ) : (
      infoClima.current && <InfoClima infoClima={infoClima}></InfoClima>
    );

  return (
    <section className="bannerClima me-auto w-50">{mostrarComp}
  
    </section>
    
  
  
  );
};

export default ConsultarClima;
