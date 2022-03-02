


console.log(document.getElementById('link-1')); 

































const not_understood = "No te he entendido, ¿Podrías reformular la pregunta? "; 

const baseDeConocimiento = [
    ///1
    { 
        pregunta: "cuales son los metodos de pago?",
        repuesta: "Puedes pagar con tarjeta de crédito o mediante transferencia bancaria",
        palabrasClave: ["pagar", "pago", "metodo de pago", "forma de pago", "forma de pagar", "tarjeta", "credito", "tarjeta credito", "metodo", "forma"],
    },
    ///2
    {
        pregunta: "que tipo de servicios o productos puedo ofrecerte? ",
        repuesta: "Entre nuestros productos o servicios mas destacados están asesoramiento financiero y el core inteligente Zeus que predice comportamientos en bolsa.",
        palabrasClave: ["servicios", "productos", "ofertas", "oferta", "servicio", "producto"],
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
        palabrasClave: ["hola", "buenos","buenas", "dias", "saludos", "ey", "eyy", "ey!"],
    },
    ///6
    { 
        pregunta: "Despedida",
        repuesta: "¡Adios! Disfruta de lo que queda de día",
        palabrasClave: ["adios", "hasta luego", "hasta nunca", "nos vemos", "bye", "xao", "besos"],
    },
    ///7
    { 
        pregunta: "hablar con uno de nuestros profesionales?",
        repuesta: "¡Hola! Bienvenido, ¿En que puedo ayudarte? ",
        palabrasClave: ["operador", "humano","persona", "no robot", "humana", "hombre", "mujer", "profesional"],
    },
    ///8
    { 
        pregunta: "invertir en ibex 35?",
        repuesta: "¡Hola! Bienvenido, ¿En que puedo ayudarte? ",
        palabrasClave: ["invertir", "invertir en ibex","ibex35", "35", "ibex"],
    },
    ///9
    { 
        pregunta: "invertir en forex?",
        repuesta: "El forex no es recomendable utilizarlo en un primer momento, para invertir en forex necesitas un broker o intermediario.",
        palabrasClave: ["invertir", "invertir en forex","forex", "divisas", "invertir en divisas", "monedas", "invertir en monedas", "invertir en divisa"],
    },
    //10
    { 
        pregunta: "invertir en criptomonedas?",
        repuesta: "¡Hola! Bienvenido, ¿En que puedo ayudarte? ",
        palabrasClave: ["invertir", "invertir en forex","forex", "divisas", "invertir en divisas", "monedas", "invertir en monedas", "invertir en divisa"],
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

let posiblesPreguntas; 
let modoMenu = false; 


const procesarInformacion = function (message) {
    console.log(posiblesPreguntas)
    if(modoMenu){
        if(message.match(/[0-9]/) && ((+message) > 0) && ((+message) < (posiblesPreguntas.length+1))){
            modoMenu = false; 
            return posiblesPreguntas[+message - 1].respuesta; 
        }else{
            return `Por favor, introduce un número entre 1 y ${posiblesPreguntas.length}`; 
        }     
    }
    let palabrasClaveMensaje = cleanMessage(message);

    posiblesPreguntas = []; 
    let numCoincidencias;  
    baseDeConocimiento.forEach(preguntaPosible => {
        numCoincidencias = 0; 
        preguntaPosible.palabrasClave.forEach( palabraClaveBC => {
            if(palabrasClaveMensaje.includes(palabraClaveBC)) numCoincidencias++; 
        }); 


        if(numCoincidencias > 0){
            if(posiblesPreguntas.length >= 1){
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
    }else if(posiblesPreguntas.length > 1 && posiblesPreguntas.length < 4 ){
        let message = `Necesito un poco más de información, la duda concretamente es: \n 
                        ${posiblesPreguntas.map( (pregunta, index) => {return "-" + (index+1) + ". ¿Quieres saber " + pregunta.pregunta + "\n"}).join("")}
        `; 
        message += "Introduce el numero de pregunta que deseas resolver: "; 
        modoMenu = true; 
        return message; 
    }else if(posiblesPreguntas.length > 4){
        return "Tengo una idea de lo que puedes necesitar, pero ahora mismo necesito más información para estar más seguro. ¿puedes ser más explicito? "; 
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
    setTimeout(generarRespuestas.bind(this, message),2000);  
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
