

const not_understood = "No te he entendido, ¿Podrías reformular la pregunta? "; 

const baseDeConocimiento = [
    ///1
    { 
        pregunta: "cuales son los metodos de pago?",
        repuesta: "Puedes pagar con tarjeta de crédito o mediante transferencia bancaria",
        palabrasClave: ["pagar", "pago", "metodo de pago", "forma de pago", "forma de pagar", "tarjeta", "credito", "tarjeta credito", "metodo", "forma"],
        respuestaConPregunta: true,
    },
    ///2
    {
        pregunta: "que tipo de servicios o productos puedo ofrecerte? ",
        repuesta: "Entre nuestros productos o servicios mas destacados están asesoramiento financiero y el core inteligente Zeus que predice comportamientos en bolsa.",
        palabrasClave: ["servicios", "productos", "ofertas", "oferta", "servicio", "producto"],
        respuestaConPregunta: true,
    },
    ///3
    {
        pregunta: "como puedes adquirir acciones búrsatiles? ",
        repuesta: "Para adquirir acciones búrsatiles necesitas un intermediaro o broker. Este te cobrara comisiones por hacer operaciones ",
        palabrasClave: ["acciones", "bursatiles", "accion", "bursatil", "adquirir acciones", "conseguir acciones", "comprar acciones", "invertir" ]
    },
    ///4
    {
        pregunta: "como puedes invertir en oro? ",
        repuesta: "Para invertir en oro puedes hablar con uno de nuestros profesionales y que te asesore más personalmente. ",
        palabrasClave: ["invertir", "oro" ]
    },
    ///5
    { 
        pregunta: "Saludo",
        repuesta: "¡Hola! Bienvenido, ¿En que puedo ayudarte? ",
        palabrasClave: ["hola", "buenos", "dias", "saludos", "ey", "eyy", "ey!"],
        respuestaConPregunta: true,
    },
    
]

const frases = ["La información de pago esta en nuestra pagina web"]
let index = 0; 

const conversation = document.querySelector('.conversation-container'); 
const waitingRow = document.querySelector('.thinking'); 


const cleanMessage = function(message){
    let palabras = message.trim().split(" "); 
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.toLowerCase(); 
    }); 
    //transformar acentos, hacer cada palabra minuscula, eliminar determinantes
    return palabras; 
}


const procesarInformacion = function (message) {
    console.log(message); 
    let palabrasClaveMensaje = cleanMessage(message);

    let posiblesPreguntas = []; 
    let numCoincidencias;  
    baseDeConocimiento.forEach(preguntaPosible => {
        numCoincidencias = 0; 
        preguntaPosible.palabrasClave.forEach( palabraClaveBC => {
            if(palabrasClaveMensaje.includes(palabraClaveBC)) numCoincidencias++; 
        }); 
        if(numCoincidencias > 0){
            if(posiblesPreguntas.length > 1){
                if(numCoincidencias > posiblesPreguntas[0].numCoincidencias){
                    posiblesPreguntas = []; 
                    posiblesPreguntas.unshift({numCoincidencias: numCoincidencias, pregunta: preguntaPosible.pregunta, respuesta: preguntaPosible.repuesta})
                }else if(numCoincidencias === posiblesPreguntas[0].numCoincidencias ){
                    posiblesPreguntas.unshift({numCoincidencias: numCoincidencias, pregunta: preguntaPosible.pregunta, respuesta: preguntaPosible.repuesta})
                }
            }else{
                posiblesPreguntas.unshift({numCoincidencias: numCoincidencias, pregunta: preguntaPosible.pregunta, respuesta: preguntaPosible.repuesta}); 
            }
        }
    }); 
    if(posiblesPreguntas.length === 1){
        return posiblesPreguntas[0].respuesta; 
    }else if(posiblesPreguntas.length > 1 ){
        let message = `Me esta costando un poco entenderte, la duda concretamente es: \n 
                        ${posiblesPreguntas.map( (pregunta, index) => {return "-" + index + ". ¿Quieres saber " + pregunta.pregunta + "\n"}).join("")}
        `; 
        message += "Introduce el numero de pregunta que deseas resolver: "
        return message; 
    }else{
        return not_understood; 
    }

    
} 



const generarRespuestas = function(message){
    let textMesagge = procesarInformacion(message); 
    createNewConvertationLine(textMesagge, true); 
    waitingRow.classList.add('d-none'); 
    index++; 

}

const displayChat = function() {
    document.querySelector(".chat-card").classList.toggle('chat-hide'); 
}



const sendMensaje = function(element) {
    let message = element.value; 
    element.value = ""; 
    createNewConvertationLine(message, false); 
    waitingRow.classList.remove('d-none'); 
    setTimeout(generarRespuestas.bind(this, message),1000);  
}


const createNewConvertationLine = function(message, isRobot){
    let row = document.createElement('div'); 
    row.classList.add('row', 'conversation-row', "gx-2"); 
    let imageCol = document.createElement('div'); 
    imageCol.classList.add('col-2'); 
    imageCol.innerHTML = `<img height="35x" width="35px" class="head-icon" src="${isRobot ? "./financeLogo" : "./pics/userpic"}.png" alt="">`

    let chatCol = document.createElement('div'); 
    chatCol.classList.add('col-10', 'conversation-dialog'); 
    chatCol.innerText = message; 

    row.insertAdjacentElement('afterbegin', chatCol); 
    row.insertAdjacentElement((isRobot) ? 'afterbegin' : 'beforeend', imageCol); 

    conversation.insertAdjacentElement('beforeend', row);  
}

const procesaTecla = function (event){
    if(event.key !== "Enter") return; 
    sendMensaje(event.target); 
}
