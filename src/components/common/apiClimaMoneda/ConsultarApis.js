import React from 'react';
import ApiMonedas from './ApiMonedas';
import ConsultarClima from './ConsultarClima';
import "./Clima.css"

const ConsultarApis = () => {
    return (
        <div className="ms-1 row bgBannerTiempo mt-5 w-100">
            <ApiMonedas></ApiMonedas>
            <ConsultarClima></ConsultarClima>
        </div>
    );
};

export default ConsultarApis;