import React from 'react';
import ApiMonedas from './ApiMonedas';
import ConsultarClima from './ConsultarClima';
import { Row } from 'react-bootstrap';
import "./Clima.css"

const ConsultarApis = () => {
    return (
        <div className="ms-0 row bgBannerTiempo marginApis d-flex justify-content-center align-items-center posApi">
            <Row xs={1} md={2} lg={2}>
            <ApiMonedas></ApiMonedas>
            <ConsultarClima></ConsultarClima>
            </Row>
        </div>
    );
};

export default ConsultarApis;