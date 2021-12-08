import React from 'react';
import Publicidad from '../../img/publicidadA.jpg'

const BannerPublicitario = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <img src={Publicidad} alt="publicidad" className="w-75" />
        </div>
    );
};

export default BannerPublicitario;