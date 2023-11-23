import DescuentoCalculator from "../Calculadora/Calculadora";
import LinksEmpresa from "../linksUtilesEmpresa/linksUtilesEmpresa";
import MediosDeContactos from "../MediosDeContactos/MediosDeContactos";

function Portada(){
    return(
        <>
        
        <MediosDeContactos/>
        <DescuentoCalculator/>
        <LinksEmpresa/>
        </>
        )
}
    
export default Portada;