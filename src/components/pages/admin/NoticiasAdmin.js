import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import CardsNoticiasAdmin from './CardsNoticiasAdmin';
import { Link } from 'react-router-dom';

const NoticiasAdmin = (props) => {

    
    return (
        <section className='container'>
            <Breadcrumb className='mt-4'>
            <BreadcrumbItem><Link to='/'>Inicio</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/admin'>Admin</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/admin/lista-noticias'>Noticias Admin</Link></BreadcrumbItem>
            </Breadcrumb>

            <h1 className='text-center my-4'>Administrador de Noticias</h1>
            <hr />
        <div className='row mt-5'>
            {props.noticias.map((noticia)=><CardsNoticiasAdmin key={noticia.id} noticia={noticia} consultaServer={props.consultaServer}></CardsNoticiasAdmin>)}
            
        </div>
        </section>
    );
};

export default NoticiasAdmin;