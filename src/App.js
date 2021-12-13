import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import Fotter from "./components/common/Fotter";
import Login from "./components/pages/Login";
import EditarNoticia from "./components/pages/admin/EditarNoticia";
import AgregarNoticia from "./components/pages/admin/AgregarNoticia";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";
import NoticiasAdmin from "./components/pages/admin/NoticiasAdmin";
import CardsNoticiasAdmin from "./components/pages/admin/CardsNoticiasAdmin";
import PaginaDetalleNoticias from "./components/pages/PaginaDetalleNoticias";
import ListaCategoria from "./components/pages/admin/ListaCategoria";
import NuevaCategoria from "./components/pages/admin/NuevaCategoria";



function App() {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    consultaServer();
  }, []);
 

  const consultaServer = async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos);
      }
             
    } catch (error) {
      console.log(error);
      console.log('desde consultasServer');
    }
  };
  return (
    <BrowserRouter>
      <Navigation />
    
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/seccion/actualidad"></Route>
        <Route exact path="/seccion/espectaculos"></Route>
        <Route exact path="/seccion/tecnologia"></Route>
        <Route exact path="/seccion/deportes"></Route>
        <Route exact path="/seccion/politica"></Route>
        <Route exact path="/seccion/economia"></Route>
        <Route exact path="/seccion/salud"></Route>
        <Route exact path="/seccion/fotografias"></Route>
        <Route exact path="/servicio/clima"></Route>
        <Route exact path="/servicio/moneda"></Route>
        <Route exact path="/institucional/contacto"></Route>
        <Route exact path="/institucional/acerca-de"></Route>
        <Route exact path="/institucional/publicidad"></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/noticias/:id" element={<PaginaDetalleNoticias noticias={noticias} consultaServer = {consultaServer}></PaginaDetalleNoticias>}></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
        <Route exact path="/admin/lista-noticias" element={<NoticiasAdmin noticias={noticias} consultaServer = {consultaServer}></NoticiasAdmin>}></Route>
        <Route exact path="/admin/editar/:id" element={<EditarNoticia consultaServer = {consultaServer}></EditarNoticia>}></Route>
        <Route exact path="/admin/agregar" element={<AgregarNoticia consultaServer = {consultaServer}></AgregarNoticia>}></Route>
        <Route exact path="/admin/categorias" element={<ListaCategoria></ListaCategoria>}></Route>
        <Route exact path="/admin/agregar-categoria" element={<NuevaCategoria></NuevaCategoria>}></Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
