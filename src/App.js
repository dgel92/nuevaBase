import "./App.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cbs from "./componentes/Cbs/Cbs";
import Fan from "./componentes/FAN/Fan";
import FanervicioReducido from "./componentes/FAN/servicioReducido";
import Footer from "./componentes/Footer/Footer";
import Informacion from "./componentes/Informacion/informacion";
import Itrackers from "./componentes/itrackers/itrackers";
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

            <Route path="/Itrackers" element={<Itrackers/>} />

            
            <Route path="/Fan" element={<Fan/>} />
            <Route path="/Fan/ServicioReducido" element={<FanervicioReducido/>} />
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
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
