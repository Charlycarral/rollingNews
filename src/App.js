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


function App() {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    consultaServer();
  }, []);

  const consultaServer = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setNoticias(datos);
      
     
    } catch (error) {
      console.log(error);
      console.log('desde consultasServer');
    }
  };
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Inicio noticias={noticias}></Inicio>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
        <Route exact path="/admin/lista-noticias" element={<NoticiasAdmin noticias={noticias} consultaServer = {consultaServer}></NoticiasAdmin>}></Route>
        <Route exact path="/admin/editar/:id" element={<EditarNoticia consultaServer = {consultaServer}></EditarNoticia>}></Route>
        <Route exact path="/admin/agregar" element={<AgregarNoticia consultaServer = {consultaServer}></AgregarNoticia>}></Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
