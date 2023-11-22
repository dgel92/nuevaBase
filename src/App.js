import { BrowserRouter, Route, Routes } from "react-router-dom";

import CambioDomicilioErrorFan from "./componentes/FAN/cambioDeDomicilioErrorFan";
import Cbs from "./componentes/Cbs/Cbs";
import ContactUS from "./componentes/Formulario/Formulario";
import ErrorEquiposEnCCIP from "./componentes/Open/ErrorEquiposEnCCIP";
import FANErrorDeAgenda from "./componentes/FAN/ErrorDeAgenda";
import FANEsperaDeEjecucion from "./componentes/FAN/EsperaDeEjecucion";
import FanervicioReducido from "./componentes/FAN/servicioReducido";
import FlowApp from "./componentes/Flow/FlowApp";
import Footer from "./componentes/Footer/Footer";
import FormularioContacto from "./componentes/FormularioItracker/Formularioitracker";
import Informacion from "./componentes/Informacion/informacion";
import ItrackersFan from './componentes/itrackers/itrackersFan';
import ItrackersOpen from './componentes/itrackers/itrackersOpen';
import Navbar from "./componentes/NavBar/NavBar";
import OpenAdelanto from './componentes/Open/OpenAdelanto';
import OpenAdelanto2 from "./componentes/Herramientas/Herramientas";
import OtAnularCerrar from './componentes/Open/OtAnularCerrar';
import PaseARedes from './componentes/Open/PaseARedes';
import Portada from "./componentes/Portada/portada";
import PosibleMasivo from './componentes/Open/posibleMasivo';
import ReduccionOpen from './componentes/Open/ReduccionOpen';
import RegularizarSerializable from "./componentes/Open/RegularSerializable";
import SinReduccionEn360 from './componentes/FAN/SinReduccion360';
import SuspendidoRecurrenteCCIP from "./componentes/FAN/SuspendidoRecurrenteCCIP";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Portada/>} />

            {/* Route de Itrackers FAN */}
            <Route path="/Fan/CambioDomicilioErrorFan" element={<CambioDomicilioErrorFan/>} />
            <Route path="/Fan/ErrorAgenda" element={<FANErrorDeAgenda/>} />
            <Route path="/Fan/EsperaDeEjecucion" element={<FANEsperaDeEjecucion/>} />
            <Route path="/Fan/ServicioReducido" element={<FanervicioReducido/>} />
            <Route path="/Fan/SinReduccion360" element={<SinReduccionEn360/>} />
            <Route path="/FAN/SuspendidoRecurrenteCCIP" element={<SuspendidoRecurrenteCCIP/>} />


            {/* Route de Itrackers OPEN */}
            <Route path="/Open/ReduccionOpen" element={<ReduccionOpen/>} />
            <Route path="/Open/AdelantoAseguramiento" element={<OpenAdelanto/>} />
            <Route path="/Open/RegularizarSerializable" element={<RegularizarSerializable/>}/>
            <Route path="/Open/ErrorEquiposEnCCIP" element={<ErrorEquiposEnCCIP/>}/>


            {/* Route de FLOW*/}
            <Route path="/Flow/FlowApp" element={<FlowApp/>} />


            <Route path="/Cbs" element={<Cbs/>} />
            <Route path="/FormularioContacto" element={<FormularioContacto/>} />
            
            <Route path="/informacion" element={<Informacion/>} />
            <Route path="/Prodecimientos" element={<ef/>} />
            
            
            <Route path="/ContactUS" element={<ContactUS/>} />
          
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
