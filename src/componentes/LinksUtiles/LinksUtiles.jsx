import BaseConocimiento from "../Media/Img/baseDeConocimiento.png"
import Codi from "../Media/Img/codi.png"
import appVentas from "../Media/Img/appVentas.png"
import ccip from "../Media/Img/ccip.png"
import ememo from "../Media/Img/ememo.png"
import fan from "../Media/Img/fan.png"
import hub from "../Media/Img/hub.png"
import itracker from "../Media/Img/itracker.png"
import symphonica from "../Media/Img/symphonica.png"
import tecdata from "../Media/Img/tecdata.png"

function LinksUtiles(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Links utiles</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-300 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={BaseConocimiento} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://basedeconocimientos.custhelp.com/#">Base de Conocimiento</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ccip} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://ccip/">CCIP</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Codi} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://codi.telecom.com.ar/login">CODI</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={itracker} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://consultaitracker/">Itrackers</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ememo} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="http://srv-webcv2.corp.cablevision.com.ar/ememo/">E-Memo</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={fan} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://telecomcrm.my.salesforce.com/console">FAN SalesForce</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={hub} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://nuevosender.corp.cablevision.com.ar/">HUB</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={symphonica} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="http://10.9.44.132/symphonica/v2_7/#/">Symphonica</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={tecdata} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://mimundo-prod1.corp.cablevision.com.ar/IDPAdmin/#/Login/MGUAdmin">TecData</a></h2>
                        </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={appVentas} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium"><a href="https://click/customer/condiciones/condiciones/APPS/app-ventas">App Ventas y contencion</a></h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinksUtiles