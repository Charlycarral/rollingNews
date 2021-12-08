import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import noticiaImg from '../../img/noticias.JPG'
const Admin = () => {
    return (
        <div>
            <h1 className='my-5 text-center pt-5'>Bienvendo</h1>
            <section className='container contenedor'>
                <div className='caja uno '>
                    <Link to='' className='text-decoration-none text-dark'>Noticias</Link>
                </div>
                <div className='caja 2 '>
                    <Link to='' className='text-decoration-none text-dark'>Categorias</Link>
                </div>
                <div className='caja 3 '>
                    <Link to='' className='text-decoration-none text-dark'>Nueva Noticia</Link>
                </div>
                <div className='caja 4 '>
                    <Link to='' className='text-decoration-none text-dark'>Nueva Categoria</Link>
                </div>
                </section>            
        </div>
    );
};

export default Admin;