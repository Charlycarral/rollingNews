import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import Fotter from "./components/common/Fotter";
import Login from "./components/pages/Login";
import ListaNoticias from "./components/pages/admin/ListaNoticias";
import EditarNoticia from "./components/pages/admin/EditarNoticia";
import AgregarNoticia from "./components/pages/admin/AgregarNoticia";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";


function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [noticias, setNoticias] = useState({});

  useEffect(() => {
    consultaServer();
  }, []);

  const consultaServer = async () => {
    try {
      const respuesta = await fetch("http://localhost:3004/noticias");
      const datos = await respuesta.json();
      setNoticias(datos);
      console.log(noticias);
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
      <Navigation />
      <AgregarNoticia></AgregarNoticia>
      {/* <EditarNoticia/> */}
      {/* <Admin/> */}
      <Routes>
        {/* <Route exact path="/" element={<Inicio></Inicio>}></Route> */}
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
        <Route
          exact
          path="/admin/lista-noticias"
          element={<ListaNoticias></ListaNoticias>}
        ></Route>
        <Route
          exact
          path="/admin/editar"
          element={<EditarNoticia></EditarNoticia>}
        ></Route>
        <Route
          exact
          path="/admin/agregar"
          element={<AgregarNoticia></AgregarNoticia>}
        ></Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
