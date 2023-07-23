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
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Links utiles</h1>
                    </div>
                    <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-300 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={BaseConocimiento} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Base de Conocimiento</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ccip} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">CCIP</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={Codi} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">CODI</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={itracker} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Itrackers</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ememo} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">E-Memo</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={fan} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">FAN SalesForce</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={hub} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">HUB</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={symphonica} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Symphonica</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={tecdata} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">TecData</h2>
                        </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={appVentas} />
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">App Ventas y contencion</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinksUtiles