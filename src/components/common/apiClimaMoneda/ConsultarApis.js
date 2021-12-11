import React from 'react';
import ApiMonedas from './ApiMonedas';
import ConsultarClima from './ConsultarClima';
import "./Clima.css"

const ConsultarApis = () => {
    return (
        <div className="row bgBannerTiempo mt-5">
            <ApiMonedas></ApiMonedas>
            <ConsultarClima></ConsultarClima>
        </div>
    );
};

export default ConsultarApis;