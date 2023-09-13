import LinksEmpresa from "../linksUtilesEmpresa/linksUtilesEmpresa";
import MediosDeContactos from "../MediosDeContactos/MediosDeContactos";
import Novedades from "../Novedades/Novedades";

function Portada(){
    return(
        <div className="container-portada">
            <MediosDeContactos/>
            <Novedades/>
            <LinksEmpresa/>
        </div>
    )
}
    
export default Portada;