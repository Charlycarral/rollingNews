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
import NoticiasporCategoria from "./components/pages/NoticiasporCategoria";
import Error404 from "./components/pages/Error404";
import EditarCategoria from "./components/pages/admin/EditarCategoria";
import Contacto from "./components/pages/Contacto";
import AboutUs from "./components/pages/AboutUs";
import Fotografia from "./components/pages/Fotografia";
import PolicticaDePrivacidad from "./components/pages/PolicticaDePrivacidad";
import PublicidadA from './img/publicidadA.jpg'
import PublicidadB from './img/publicidadA.jpg'
import PublicidadC from './img/publicidadA.jpg'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [noticiasdeportes, setnoticiasdeportes] = useState([]);
  const [noticiaspolitica, setnoticiaspolitica] = useState([]);
  const [noticiaseconomia, setnoticiaseconomia] = useState([]);
  const [noticiasespectaculos, setnoticiasespectaculos] = useState([]);
  const [suscriptores, setSuscriptores] = useState([]);

  const [noticiasdestacadas, setnoticiasdestacadas] = useState([]);
  const [noticiaprincipal, setnoticiaprincipal] = useState([]);
  const [loginCtr, setLoginCtr] = useState(false);
  const [loginCtrAd, setLoginCtrAd] = useState(false);

  const URL = process.env.REACT_APP_API_URL_USER;
  const URL_a = process.env.REACT_APP_API_URL_ADMIN;
  const URL_n = process.env.REACT_APP_API_URL_NOTIC;
  const URL_c = process.env.REACT_APP_API_URL_CAT;

  useEffect(() => {
    consultarUser();
    consultarAdmin();
    consultaServer();
    consultarCat();
    noticiaspaginaprincipal();
    consultarInicio();
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

  const consultarInicio = () => {
    if (loginCtr === true) {
      setLoginCtr(true);
    } else {
      setLoginCtr(false);
    }
    if (loginCtrAd === true) {
      setLoginCtrAd(true);
    } else {
      setLoginCtrAd(false);
    }
  };

  const consultarCat = async () => {
    try {
      const respuesta = await fetch(URL_c);
      const datos = await respuesta.json();
      setCategorias(datos);
    } catch (error) {
      console.log(error);
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
    }
  };

  const noticiaspaginaprincipal = async () => {
    try {
      const respuesta = await fetch(URL_n);
      if (respuesta.status === 200) {
        const noticias = await respuesta.json();
        const articulosdeportes = await noticias
          .filter((noticia) => noticia.categoria === "deportes")
          .splice(-3);
        setnoticiasdeportes(articulosdeportes);
        const articulospolitica = await noticias
          .filter((noticia) => noticia.categoria === "política")
          .splice(-3);
        setnoticiaspolitica(articulospolitica);
        const articuloseconomia = await noticias
          .filter((noticia) => noticia.categoria === "economía")
          .splice(-3);
        setnoticiaseconomia(articuloseconomia);
        const articuloespectaculos = await noticias
          .filter((noticia) => noticia.categoria === "espectáculos")
          .splice(-3);
        setnoticiasespectaculos(articuloespectaculos);
        const articulosuscriptores = await noticias
          .filter((noticia) => noticia.categoria === "suscriptores")
          .splice(-3);
        setSuscriptores(articulosuscriptores);
        const articulosdestacados = await noticias
          .filter((noticia) => noticia.destacada === true)
          .splice(-3);
        setnoticiasdestacadas(articulosdestacados);
        const articuloprincipal = await noticias
          .filter((noticia) => noticia.principal === true)
          .splice(-1);
        setnoticiaprincipal(articuloprincipal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navigation
        loginCtrAd={loginCtrAd}
        setLoginCtrAd={setLoginCtrAd}
        loginCtr={loginCtr}
        setLoginCtr={setLoginCtr}
        categorias={categorias}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Inicio
              noticiasdeportes={noticiasdeportes}
              noticiaspolitica={noticiaspolitica}
              noticiaseconomia={noticiaseconomia}
              noticiasespectaculos={noticiasespectaculos}
              noticiasdestacadas={noticiasdestacadas}
              noticiaprincipal={noticiaprincipal}
              suscriptores={suscriptores}
              consultaServer={consultaServer}
              PublicidadA={PublicidadA}
              PublicidadB={PublicidadB}
              PublicidadC={PublicidadC}
            ></Inicio>
          }
        ></Route>
        <Route
          exact
          path="/noticias/seccion/:categoria"
          element={
            <NoticiasporCategoria
              noticias={noticias}
              consultaServer={consultaServer}
            ></NoticiasporCategoria>
          }
        ></Route>
        <Route exact path="/error404" element={<Error404></Error404>}></Route>
        <Route
          exact
          path="/seccion/fotografias"
          element={<Fotografia></Fotografia>}
        ></Route>
        <Route
          exact
          path="/institucional/contacto"
          element={<Contacto></Contacto>}
        ></Route>
        <Route
          exact
          path="/institucional/acerca-de"
          element={<AboutUs></AboutUs>}
        ></Route>
        <Route
          exact
          path="/institucional/politicas-de-privacidad"
          element={<PolicticaDePrivacidad></PolicticaDePrivacidad>}
        ></Route>
        <Route exact path="/institucional/publicidad"></Route>
        <Route
          exact
          path="/login"
          element={
            <Login
              loginCtrAd={loginCtrAd}
              setLoginCtrAd={setLoginCtrAd}
              loginCtr={loginCtr}
              setLoginCtr={setLoginCtr}
              admins={admins}
              usuarios={usuarios}
            ></Login>
          }
        ></Route>

        {loginCtrAd === true ? (
          <Route exact path="/admin" element={<Admin></Admin>}></Route>
        ) : (
          <Route exact path="/admin" element={<Error404></Error404>}></Route>
        )}

        <Route
          exact
          path="/suscribe"
          element={
            <Suscribe
              consultarUser={consultarUser}
              usuarios={usuarios}
              admins={admins}
              consultarAdmin={consultarAdmin}
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
              loginCtrAd={loginCtrAd}
              setLoginCtrAd={setLoginCtrAd}
              loginCtr={loginCtr}
              setLoginCtr={setLoginCtr}
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
              consultarUser={consultarUser}
              usuarios={usuarios}
              admins={admins}
              consultarAdmin={consultarAdmin}
              consultarInicio={consultarInicio}
            ></NoticiasAdmin>
          }
        ></Route>
        <Route
          exact
          path="/admin/editar/:id"
          element={
            <EditarNoticia
              consultaServer={consultaServer}
              categorias={categorias}
            ></EditarNoticia>
          }
        ></Route>
        <Route
          exact
          path="/admin/agregar"
          element={
            <AgregarNoticia
              consultaServer={consultaServer}
              categorias={categorias}
            ></AgregarNoticia>
          }
        ></Route>
        <Route
          exact
          path="/admin/categorias"
          element={
            <ListaCategoria
              categorias={categorias}
              consultarCat={consultarCat}
            ></ListaCategoria>
          }
        ></Route>
        <Route
          exact
          path="/admin/agregar-categoria"
          element={
            <NuevaCategoria
              categorias={categorias}
              consultarCat={consultarCat}
            ></NuevaCategoria>
          }
        ></Route>
        <Route
          exact
          path="/admin/editar-categoria/:id"
          element={
            <EditarCategoria
              categorias={categorias}
              consultarCat={consultarCat}
            ></EditarCategoria>
          }
        ></Route>
      </Routes>
      <Fotter categorias={categorias} />
    </Router>
  );
}

export default App;
