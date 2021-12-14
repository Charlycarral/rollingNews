import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/common/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Admin from './components/pages/admin/Admin';
import Fotter from './components/common/Fotter';
import Login from './components/pages/Login';
import Suscribe from './components/pages/Suscribe';
import ListaNoticias from './components/pages/admin/ListaNoticias';
import EditarNoticia from './components/pages/admin/EditarNoticia';
import AgregarNoticia from './components/pages/admin/AgregarNoticia';
import Inicio from './components/pages/Inicio';
import { useState, useEffect } from 'react';



function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [admins, setAdmins] = useState([]);
  const URL = process.env.REACT_APP_API_URL_USER;
  const URL_a = process.env.REACT_APP_API_URL_ADMIN;

  useEffect(() => {
    consultarUser();
    consultarAdmin();
  }, []);

  const consultarUser = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setUsuarios(datos);
    }catch(err){
      console.log(err);
    }
  }

  const consultarAdmin = async () => {
    try {
      const respuesta = await fetch(URL_a);
      const datos = await respuesta.json();
      setAdmins(datos);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <BrowserRouter>
    <Navigation/>

    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/seccion/actualidad" ></Route>
      <Route exact path="/seccion/espectaculos" ></Route>
      <Route exact path="/seccion/tecnologia" ></Route>
      <Route exact path="/seccion/deportes" ></Route>
      <Route exact path="/seccion/politica" ></Route>
      <Route exact path="/seccion/economia" ></Route>
      <Route exact path="/seccion/salud" ></Route>
      <Route exact path="/seccion/fotografias" ></Route>
      <Route exact path="/servicio/clima" ></Route>
      <Route exact path="/servicio/moneda" ></Route>
      <Route exact path="/institucional/contacto" ></Route>
      <Route exact path="/institucional/acerca-de" ></Route>
      <Route exact path="/institucional/publicidad" ></Route>
      <Route exact path="/login" element={<Login admins={admins} usuarios={usuarios}></Login>} ></Route>
      <Route exact path="/admin" element={<Admin></Admin>} ></Route>
      <Route exact path="/suscribe" element={<Suscribe consultarUser={consultarUser} usuarios={usuarios}></Suscribe>} ></Route>
      <Route exact path="/admin/lista-noticias" element={<ListaNoticias></ListaNoticias>}></Route>
      <Route exact path="/admin/editar" element={<EditarNoticia></EditarNoticia>}></Route>
      <Route exact path="/admin/agregar" element={<AgregarNoticia></AgregarNoticia>}></Route>
    </Routes>
    <Fotter/>
    </BrowserRouter>
  );
}

export default App;
