import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/common/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Fotter from './components/common/Fotter';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route exact path="/seccion/actualidad"></Route>
      <Route exact path="/seccion/espectaculos"></Route>
      <Route exact path="/seccion/tecnologia"></Route>
      <Route exact path="/seccion/deportes"></Route>
      <Route exact path="/seccion/politica"></Route>
      <Route exact path="/seccion/economia"></Route>
      <Route exact path="/seccion/salud" ></Route>
      <Route exact path="/seccion/fotografias"></Route>
      <Route exact path="/servicio/clima"></Route>
      <Route exact path="/servicio/moneda"></Route>
      <Route exact path="/institucional/contacto"></Route>
      <Route exact path="/institucional/acerca-de"></Route>
      <Route exact path="/institucional/publicidad"></Route>
      <Route exact path="/login"></Route>
    </Routes>
    <Fotter/>
    </BrowserRouter>

  );
}

export default App;
