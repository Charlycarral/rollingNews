import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/admin/Admin";
import Fotter from "./components/common/Fotter";
import Login from "./components/pages/Login";
import EditarNoticia from "./components/pages/admin/EditarNoticia";
import AgregarNoticia from "./components/pages/admin/AgregarNoticia";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";
import NoticiasAdmin from "./components/pages/admin/NoticiasAdmin";
import PaginaDetalleNoticias from "./components/pages/PaginaDetalleNoticias";
import ListaCategoria from "./components/pages/admin/ListaCategoria";
import NuevaCategoria from "./components/pages/admin/NuevaCategoria";
import Suscribe from "./components/pages/Suscribe";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [noticiasdeportes, setnoticiasdeportes] = useState([]);
  const [noticiaspolitica, setnoticiaspolitica] = useState([]);
  const [noticiaseconomia, setnoticiaseconomia] = useState([]);
  const [noticiasprincipales, setnoticiasprincipales] = useState([]);

  const URL = process.env.REACT_APP_API_URL_USER;
  const URL_a = process.env.REACT_APP_API_URL_ADMIN;
  const URL_n = process.env.REACT_APP_API_URL_NOTIC;

  useEffect(() => {
    consultarUser();
    consultarAdmin();
    consultaServer();
    noticiaspaginaprincipal();
  }, []);

  const consultarUser = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setUsuarios(datos);
    } catch (err) {
      console.log(err);
    }
  };

  const consultarAdmin = async () => {
    try {
      const respuesta = await fetch(URL_a);
      const datos = await respuesta.json();
      setAdmins(datos);
    } catch (err) {
      console.log(err);
    }
  };

  const consultaServer = async () => {
    try {
      const respuesta = await fetch(URL_n);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos);
      }
    } catch (error) {
      console.log(error);
      console.log("desde consultasServer");
    }
  };

  const noticiaspaginaprincipal = async () => {
    try {
      const respuesta = await fetch(URL_n);
      if (respuesta.status === 200) {
        const noticias = await respuesta.json();
        const articulosdeportes = await noticias
          .filter((noticia) => noticia.categoria === "deportes")
          .splice(1);
        setnoticiasdeportes(articulosdeportes);
        const articulospolitica = await noticias
          .filter((noticia) => noticia.categoria === "politica")
          .splice(1);
          setnoticiaspolitica(articulospolitica);
        const articuloseconomia = await noticias
          .filter((noticia) => noticia.categoria === "economia")
          .splice(1);
          setnoticiaseconomia(articuloseconomia);
        const articulosprincipales = await noticias
          .filter((noticia) => noticia.destacada === true)
          .splice(1);
          setnoticiasprincipales(articulosprincipales);
}}catch (error) {
      console.log(error);
      console.log("desde consultasServer");
    }
  };

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Inicio
              noticiasdeportes={noticiasdeportes}
              noticiaspolitica={noticiaspolitica}
              noticiaseconomia={noticiaseconomia}
              noticiasprincipales={noticiasprincipales}
              consultaServer={consultaServer}
            ></Inicio>
          }
        ></Route>
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
        <Route
          exact
          path="/login"
          element={<Login admins={admins} usuarios={usuarios}></Login>}
        ></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
        <Route
          exact
          path="/suscribe"
          element={
            <Suscribe
              consultarUser={consultarUser}
              usuarios={usuarios}
            ></Suscribe>
          }
        ></Route>
        <Route
          exact
          path="/noticias/:id"
          element={
            <PaginaDetalleNoticias
              noticias={noticias}
              consultaServer={consultaServer}
            ></PaginaDetalleNoticias>
          }
        ></Route>
        <Route
          exact
          path="/admin/lista-noticias"
          element={
            <NoticiasAdmin
              noticias={noticias}
              consultaServer={consultaServer}
            ></NoticiasAdmin>
          }
        ></Route>
        <Route
          exact
          path="/admin/editar/:id"
          element={
            <EditarNoticia consultaServer={consultaServer}></EditarNoticia>
          }
        ></Route>
        <Route
          exact
          path="/admin/agregar"
          element={
            <AgregarNoticia consultaServer={consultaServer}></AgregarNoticia>
          }
        ></Route>
        <Route
          exact
          path="/admin/categorias"
          element={<ListaCategoria></ListaCategoria>}
        ></Route>
        <Route
          exact
          path="/admin/agregar-categoria"
          element={<NuevaCategoria></NuevaCategoria>}
        ></Route>
      </Routes>
      <Fotter />
    </Router>
  );
}

export default App;
