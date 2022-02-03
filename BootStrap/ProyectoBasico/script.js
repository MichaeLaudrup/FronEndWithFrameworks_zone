

const not_understood = "No te he entendido, ¿Podrias ser más explicito? "; 



const frases = ["La información de pago esta en nuestra pagina web"]
let index = 0; 

const conversation = document.querySelector('.conversation-container'); 
const waitingRow = document.querySelector('.thinking'); 


const generarRespuestas = function(){
    createNewConvertationLine(frases[index], true); 
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
    setTimeout(generarRespuestas,1000);  
}


const createNewConvertationLine = function(message, isRobot){
    let row = document.createElement('div'); 
    row.classList.add('row', 'conversation-row'); 
    let imageCol = document.createElement('div'); 
    imageCol.classList.add('col-2'); 
    imageCol.innerHTML = `<img height="40px" width="40px" class="head-icon" src="./pics/${isRobot ? "robotpic" : "userpic"}.png" alt="">`

    let chatCol = document.createElement('div'); 
    chatCol.classList.add('col-10', 'conversation-dialog'); 
    chatCol.innerText = message; 

    row.insertAdjacentElement('afterbegin', chatCol); 
    row.insertAdjacentElement((isRobot) ? 'afterbegin' : 'beforeend', imageCol); 

    conversation.insertAdjacentElement('beforeend', row); 

    
}