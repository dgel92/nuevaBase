import "./App.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cbs from "./componentes/Cbs/Cbs";
import Fan from "./componentes/FAN/Fan";
import FanervicioReducido from "./componentes/FAN/servicioReducido";
import Informacion from "./componentes/Informacion/informacion";
import NavBar from './componentes/NavBar/NavBar';
import Open from "./componentes/Open/Open";
import Portada from "./componentes/Portada/portada";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Portada/>} />
            
            <Route path="/Fan" element={<Fan/>} />
            <Route path="/Fan/ServicioReducido" element={<Fan/>} />
            <Route path="/Fan/InstaladoOService" element={<Fan/>} />
            <Route path="/Fan/ErrorAgenda" element={<Fan/>} />
            <Route path="/Fan/CambioDeDomicilio" element={<Fan/>} />
            <Route path="/Fan/SinReduccion360" element={<Fan/>} />




            <Route path="/Open" element={<Open/>} />
            <Route path="/Cbs" element={<Cbs/>} />
            
            <Route path="/informacion" element={<Informacion/>} />
            <Route path="/Prodecimientos" element={<ef/>} />
            <Route path="/FAN/servicioReducido" element={<FanervicioReducido/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
