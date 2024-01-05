const data = [
    //errores en pantalla de decodificador//
    {
        "CÓDIGO": "S1021",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes al iniciar. Por favor, aguardá unos instantes y si Flow Box no inicia, comunicate con nosotros con el código de error (S1046)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1022",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Estamos teniendo inconvenientes intentando reproducir este contenido. <br>Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (S1070).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1023",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes al iniciar. Por favor aguardá unos instantes y si Flow Box no inicia, comunicate con nosotros con el código de error (S1023).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1024",
        "TEXTO_CLIENTE_DECODIFICADOR": "Código inválido. Código de error (S1024).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1025",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes al iniciar. Por favor, aguardá unos instantes y si Flow Box no inicia, comunicate con nosotros con el código de error (S1025).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1026",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops..! Algo salió mal. Si el problema persiste, comunicate con nosotros con el código de error (S1026).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Es un código genérico, hay algún inconveniente pero no está claro. En CODI seguimos el flujo Otros Errores."
    },
    {
        "CÓDIGO": "S1027",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (S1027).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Problemas en funcionalidades como Reiniciar, Grabar o Retroceder en contenido. También reproducir contenido ya emitido. En CODI seguimos el flujo Inconvenientes con Funcionalidades."
    },
    {
        "CÓDIGO": "S1028",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Este canal no se encuentra disponible en este momento. Por favor, volvé a intentar más tarde y si el problema persiste, comunicate con nosotros con el código de error (S1028). Presioná cualquier botón del control remoto para cerrar el mensaje.",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Problemas en funcionalidades como Reiniciar, Grabar o Retroceder en contenido. También reproducir contenido ya emitido. En CODI seguimos el flujo Inconvenientes con Funcionalidades."
    },
    {
        "CÓDIGO": "S1029",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Este contenido no se encuentra disponible en este momento. Por favor, volvé a intentar más tarde y si el inconveniente persiste, comunicate con nosotros con el código de error (S1029). Presioná cualquier botón del control remoto para cerrar el mensaje.",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Problemas en funcionalidades como Reiniciar, Grabar o Retroceder en contenido. También reproducir contenido ya emitido. En CODI seguimos el flujo Inconvenientes con Funcionalidades."
    },
    {
        "CÓDIGO": "S1032",
        "TEXTO_CLIENTE_DECODIFICADOR": "Este contenido no se encuentra disponible en este momento. Por favor, volvé a intentar más tarde y si el inconveniente persiste, comunicate con nosotros con el código de error (S1032)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "No permite reproducir un contenido puntual. En CODI seguimos el flujo Pantalla Negra/Gris en contenido."
    },
    {
        "CÓDIGO": "S1039",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes con tu decodificador. Por favor, comunicate con nosotros con el código de error (S1039).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1040",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes con tu decodificador. Por favor, comunicate con nosotros con el código de error (S1040).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1043",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes con tu decodificador. Por favor, comunicate con nosotros con el código de error (S1043).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1044",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes con tu decodificador. Por favor, comunicate con nosotros con el código de error (S1044).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1046",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes al iniciar. Por favor, aguardá unos instantes y si Flow Box no inicia, comunicate con nosotros con el código de error (S1046)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Decodificador no enlistado, activado o aprovisionado. En CODI seguimos el flujo Placa s1039."
    },
    {
        "CÓDIGO": "S1070",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (S1070).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "No inicia el siguiente capítulo o contenido luego de la cuenta atrás. En CODI seguimos el flujo Otros Errores."
    },
    {
        "CÓDIGO": "S1075",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops! Hubo un error, intentá nuevamente en unos minutos - Error (S1075).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "No inicia una App de terceros luego de un tiempo, como Netflix, Star+ o Disney+. En CODI seguimos el flujo Inconvenientes con Aplicaciones."
    },
    {
        "CÓDIGO": "S1081",
        "TEXTO_CLIENTE_DECODIFICADOR": "No podemos reproducir este tipo de contenido en tu dispositivo. Por favor, volvé a intentarlo y si el problema persiste comunicate con nosotros con el código de error (S1081).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece cuando se intenta reproducir un contenido inexistente, como una serie eliminada de la grilla. Se le informa al cliente. Podemos usar el flujo Otros Errores."
    },
    {
        "CÓDIGO": "S1083",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (S1083).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta al intentar reproducir un contenido prohibido, ya sea por el sistema o ubicación geográfica. En CODI seguimos el flujo Errores de Reproducción."
    },
    {
        "CÓDIGO": "S1086",
        "TEXTO_CLIENTE_DECODIFICADOR": "Oops algo salió mal...Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (S1086).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Este es un código genérico, aparece cuando hay una falla al reproducir algún contenido pero no identifica la razón exacta. En CODI seguimos el flujo Otros Errores."
    },
    {
        "CÓDIGO": "S1092",
        "TEXTO_CLIENTE_DECODIFICADOR": "En este momento no podemos comunicarnos con nuestros servidores. Por favor, verifica que el decodificador se entre correctamente conectado y si el problema persiste comunícate con nosotros con el código de error (S1092).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece cuando se perdió la conexión del decodificador. En CODI seguimos el flujo Placa s1092."
    },
    {
        "CÓDIGO": "S1094",
        "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, no es posible reproducir este contenido en tu ubicación. Por favor, comunicate con nosotros con el código de error (S1094).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
    },
    {
        "CÓDIGO": "S1099",
        "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, no es posible reproducir este contenido en tu ubicación. Por favor, comunicate con nosotros con el código de error (S1099)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
    },
    {
        "CÓDIGO": "S1100",
        "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, este contenido no se encuentra disponible debido a que no estás suscripto a este servicio. Por favor, comunicate con nosotros con el código de error (S1100).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
    },
    {
        "CÓDIGO": "S1102",
        "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, este contenido no está disponible en su tipo de red de cliente actual. Por favor, comunicate con nosotros con el código de error (S1102).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
    },
    {
        "CÓDIGO": "S386",
        "TEXTO_CLIENTE_DECODIFICADOR": "Tu cuenta no está activa. Por favor comunicate con nosotros con el código de error (S386).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta por tener una cuenta Flow Inactiva. En CODI seguimos el flujo Inconvenientes de Activación."
    },
    {
        "CÓDIGO": "S387",
        "TEXTO_CLIENTE_DECODIFICADOR": "Tu dispositivo no se puede activar en este momento.Por favor comunicate con nosotros con el código de error (S387).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta por tener una cuenta Flow Inactiva. En CODI seguimos el flujo Inconvenientes de Activación."
    },
    {
        "CÓDIGO": "S603",
        "TEXTO_CLIENTE_DECODIFICADOR": "Hubo un problema al actualizar el PIN. Por favor comunicate con nosotros con el código de error (S603)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece cuando hay un incoveniente con el PIN. Podemos guiar al cliente para que se autogestione para editar el PIN y/o seguir el flujo de Flow App – Configuraciones."
    },
    {
        "CÓDIGO": "S917",
        "TEXTO_CLIENTE_DECODIFICADOR": "No pudimos iniciar tu servicio. Por favor comunicate con nostros con el código de error (S917). Te pedimos disculpas por el inconveniente.",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta por tener una falla que impide la conexión a Internet durante el inicio del decodificador. En CODI seguimos el flujo s1092."
    },
    {
        "CÓDIGO": "S970",
        "TEXTO_CLIENTE_DECODIFICADOR": "No tenes suficiente crédito en tu cuenta para suscribirte. Por favor comunicate con nosotros para aumentar tu límite de crédito. (S970)",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Este código aparece cuando el cliente supera el límite de crédito disponible para servicion On Demand. En CODI seguimos el flujo s970/AT7."
    },
    {
        "CÓDIGO": "S989",
        "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes al iniciar. Por favor, aguardá unos instantes y si Flow Box no inicia, comunicate con nosotros con el código de error (S989).",
        "AFECTACIÓN_Y_PROCEDIMIENTO": "Es un código genérico, aparece cuando hay un problema al iniciar pero no está claro. En CODI seguimos el flujo Otros Errores."
    },


//Errores en aplicacion de Flow//

{
    "CÓDIGO": "W106",
    "TEXTO_CLIENTE_DECODIFICADOR": "Tu cuenta está inactiva. Por favor, comunicate con el Centro de Atención al cliente con el código de error (W106).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta por que el cliente tiene su cuenta de Flow Inactiva. En CODI seguimos el flujo Inconvenientes de Activación."
},
{
    "CÓDIGO": "W107",
    "TEXTO_CLIENTE_DECODIFICADOR": "Intentá nuevamente y si el problema persiste contactate con nosotros con el código de error (W107).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece en caso de que el cliente no pueda conectarse al servidor de Flow. En CODI seguimos el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1072",
    "TEXTO_CLIENTE_DECODIFICADOR": "Oops, algo salió mal. Intentá nuevamente y si el problema persiste comunicate con nosotros con el código de error (W1072).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Es un error particular de los navegadores de internet, suele aparecer cuando en sintonía el navegador tiene el código de error 503. En CODI seguimos el flujo No Navega en Sitio Particular."
},
{
    "CÓDIGO": "W1082",
    "TEXTO_CLIENTE_DECODIFICADOR": "No podemos reproducir este tipo de contenido en tu dispositivo. Por favor, volvé a intentarlo y si el problema persiste comunicate con nosotros con el código de error (W1082).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece cuando se intenta reproducir un contenido inexistente, como una serie eliminada de la grilla. Se le informa al cliente. Podemos usar el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1083",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (W1083).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta al intentar reproducir un contenido prohibido, ya sea por el sistema o ubicación geográfica. En CODI seguimos el flujo Errores de Reproducción."
},

{
    "CÓDIGO": "W1085",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido. Por favor, volvé a intentar y si el problema persiste, comunicate con nosotros con el código de error (W1085).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Suele aparecer cunado hay un error en la información detallada del contenido. En CODI seguimos el flujo Inconvenientes con la Grilla."
},
{
    "CÓDIGO": "W1090",
    "TEXTO_CLIENTE_DECODIFICADOR": "Ohoh…Algo salió mal. Por favor, intentá nuevamente y si el problema persiste comunicate con nosotros con el código de error (W1090).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Es un código genérico, hay algún inconveniente pero no está claro. En CODI seguimos el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1099",
    "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, no es posible reproducir este contenido en tu ubicación. Por favor, comunicate con nosotros con el código de error (W1099)",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta al intentar reproducir un contenido prohibido, ya sea por el sistema o ubicación geográfica. En CODI seguimos el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1100",
    "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, este contenido no se encuentra disponible debido a que no estás suscripto a este servicio. Por favor, comunicate con nosotros con el código de error (W1100).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1102",
    "TEXTO_CLIENTE_DECODIFICADOR": "Te pedimos disculpas, este contenido no está disponible en su tipo de red de cliente actual. Por favor, comunicate con nosotros con el código de error (W1102).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener una restricción de suscripción que impide ver el contenido. En CODI seguimos el flujo Errores de Reproducción."
},
{
    "CÓDIGO": "W1103",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido porque se ha alcanzado el límite de dispositivos activos para esta cuenta. Detenga al menos un dispositivo y vuelva a intentarlo (W1103).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al superar el límite de dispositivos registrados en la cuenta. Podemos guiar al cliente para que se autogestione y/o seguir el flujo de Flow App – Configuraciones."
},
{
    "CÓDIGO": "W1104",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido porque se ha alcanzado el límite de dispositivos activos para esta cuenta. Los siguientes dispositivos están actualmente 1.nombre de dispositivo. 2 nombre de dispositivo. Por favor, detenga al menos un dispositivo y vuelva a intentarlo. (W1104)",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al superar el límite de dispositivos registrados en la cuenta. Podemos guiar al cliente para que se autogestione y/o seguir el flujo de Flow App – Configuraciones."
},
{
    "CÓDIGO": "W1105",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes intentando reproducir este contenido porque se ha alcanzado el límite de dispositivos activos para esta cuenta. Los siguientes dispositivos están actualmente activos: 1.desconocido. 2 desconocido. Por favor, detenga al menos un dispositivo y vuelva a intentarlo. (W1105)",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al superar el límite de dispositivos registrados en la cuenta. Podemos guiar al cliente para que se autogestione y/o seguir el flujo de Flow App – Configuraciones."
},
{
    "CÓDIGO": "W1106",
    "TEXTO_CLIENTE_DECODIFICADOR": "Hay un problema con la conexión. Por favor, intentá nuevamente en unos minutos.",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener problemas de conexión, ya sean cortes o lentitud de internet. Verificamos cómo está funcionando el servicio de Internet del cliente.",
},
{
    "CÓDIGO": "W112",
    "TEXTO_CLIENTE_DECODIFICADOR": "Oops..! Algo salió mal. Intentá nuevamente y si el problema persiste contactate con nosotros con el código de error (W112).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece al tener un problema a la hora de Loguearse en Flow App. En CODI seguimos el flujo Inconveniente de Logueo / Registración.",
},
{
    "CÓDIGO": "W113",
    "TEXTO_CLIENTE_DECODIFICADOR": "Oops..! Algo salió mal. Intentá nuevamente y si el problema persiste contactate con nosotros con el código de error (W113).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Aparece cuando la cuenta que se intenta ingresar en un dispositivo que ya tiene asignada otra cuenta.En CODI seguimos el flujo Inconveniente de Logueo.",
},
{
    "CÓDIGO": "W90",
    "TEXTO_CLIENTE_DECODIFICADOR": "Oops, algo salió mal. Intentá nuevamente y si el problema persiste comunicate con nosotros con el código de error (W90).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Se presenta cuando el cliente intenta ingresar en un perfíl que fue eliminado recientemente. Podemos asesorar al cliente para crear un perfíl nuevo o seguir el flujo Flow App *- Configuraciones.",
},
{
    "CÓDIGO": "W970",
    "TEXTO_CLIENTE_DECODIFICADOR": "No tenes suficiente crédito en tu cuenta para suscribirte. Por favor comunicate con nosotros para aumentar tu límite de crédito. (W970)",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Este código aparece cuando el cliente supera el límite de crédito disponible para servicion On Demand. En CODI seguimos el flujo s970/AT7.",
},
{
    "CÓDIGO": "W985",
    "TEXTO_CLIENTE_DECODIFICADOR": "Estamos teniendo inconvenientes. Por favor intentá nuevamente y si el problema persiste, comunicate con nosotros con el código de error (W985).",
    "AFECTACIÓN_Y_PROCEDIMIENTO": "Mensaje Pop-Up que aparece cuando hay un error en la información detallada del contenido. En CODI seguimos el flujo Errores de Reproducción.",
},
];

export default data;