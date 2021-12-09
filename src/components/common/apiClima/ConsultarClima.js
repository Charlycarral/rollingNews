import React, {useState, useEffect} from "react";
import InfoClima from "./InfoClima";


const ConsultarClima = () => {

    const [infoClima, setinfoClima] = useState({});
  
  useEffect(()=>{
  consultaApiClima();

}, []);

const consultaApiClima = async ()=>{
const respuesta = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=-26.8241&lon=-65.2226&lang=es&units=metric&exclude=minutely,hourly,alerts&appid=7353cb6726135d4f6d97bab9c1a6f888');
const dato = await respuesta.json();
setinfoClima(dato);
}
    return (
        <div>
            <InfoClima infoClima={infoClima}></InfoClima>
            
        </div>
    );
};

export default ConsultarClima;