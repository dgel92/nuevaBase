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
import OpenAdelanto from './componentes/Open/OpenAdelanto';
import OtAnularCerrar from './componentes/Open/OtAnularCerrar';
import PaseARedes from './componentes/Open/PaseARedes';
import Portada from "./componentes/Portada/portada";
import PosibleMasivo from './componentes/Open/posibleMasivo';
import ReduccionOpen from './componentes/Open/ReduccionOpen';

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
            <Route path="/Fan/SuspendidoRecurrenteCCIP" element={<Fan/>} />




            <Route path="/Open" element={<Open/>} />
            <Route path="/Open/AdelantoAseguramiento" element={<OpenAdelanto/>} />
            <Route path="/Open/PosibleMasivo" element={<PosibleMasivo/>} />
            <Route path="/Open/OtAnularCerrar" element={<OtAnularCerrar/>} />
            <Route path="/Open/ReduccionOpen" element={<ReduccionOpen/>} />
            <Route path="/Open/PaseARedes" element={<PaseARedes/>}/>
            <Route path="/Cbs" element={<Cbs/>} />
            
            <Route path="/informacion" element={<Informacion/>} />
            <Route path="/Prodecimientos" element={<ef/>} />
          
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
