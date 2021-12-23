import React from "react";
import "./Clima.css"

const InfoClima = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-end w-100">
      <img src={'http://openweathermap.org/img/wn/' + props.infoClima.current.weather[0].icon + '@2x.png'} className="iconosClima mt-2"></img>
      <h5 className="fuente mt-3"> {props.infoClima.current.temp}º San Miguel de Tucumán.</h5>
    </div>
  );
};

export default InfoClima;