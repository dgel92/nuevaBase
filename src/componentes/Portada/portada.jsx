import LinksEmpresa from "../linksUtilesEmpresa/linksUtilesEmpresa";
import MediosDeContactos from "../MediosDeContactos/MediosDeContactos";
import Novedades from "../Novedades/Novedades";

function Portada(){
    return(
        <>
        <MediosDeContactos/>
        <Novedades/>
        <LinksEmpresa/>
        </>
        )
}
    
export default Portada;