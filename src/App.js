import "./App.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cbs from "./componentes/Cbs/Cbs";
import Informacion from "./componentes/Informacion/informacion";
import NavBar from './componentes/NavBar/NavBar';
import Planillas from "./componentes/Planillas/Planillas";
import Portada from "./componentes/Portada/portada";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Portada/>} />
            <Route path="/CBS" element={<Cbs/>} />
            <Route path="/informacion" element={<Informacion/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
