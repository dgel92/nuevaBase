import {BrowserRouter, Route, Routes} from "react-router-dom"

import NavBar from './componentes/NavBar/NavBar';
import Portada from "./componentes/Portada/portada";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/portada" element={Portada}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
