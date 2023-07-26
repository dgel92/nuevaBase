import LinksUtiles from "../LinksUtiles/LinksUtiles";
import MediosDeContactos from "../MediosDeContactos/MediosDeContactos";
import NavBar from "../NavBar/NavBar";
import Planillas from "../Planillas/Planillas";

function Portada(){
    return(
        <div>
            <Planillas/>
            <LinksUtiles/>
            <MediosDeContactos/>
        </div>
    )
}
    
export default Portada;