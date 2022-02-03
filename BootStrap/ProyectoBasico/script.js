

const not_understood = "No te he entendido, ¿Podrias ser más explicito? "; 


var cbQuestions = [
    ["hola", "Buenas!", "Buenos días", "buenas tardes", "buenas noches"],
    ["quien eres", "eres humano?", "eres un bot?", "eres una persona o un bot?"],
];

// Posibles respuestas correspondientes a disparadores 

var cbAnswers = [
    ["Hola!, ¿qué deseas saber?", "Buenas!, ¿qué deseas saber", "Buenos días. ¿Qué deseas saber", "Buenas tardes. ¿Qué deseas saber", "Buenas noches. ¿Qué deseas saber"],
    ["Soy un bot", "No. Soy un bot", "Sí, lo soy", "Soy un bot"],
];

// Para cualquier otra entrada de usuario 

var cbAlternatives = [
    "Continuar...",
    "Intentar de nuevo",
];

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

var inputField = document.getElementById("input")
inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        var input = inputField.value;
        inputField.value = "";
        compare(input);
    }
});

function compare(input) {
    var msg;
    for (var x = 0; x < cbQuestions.length; x++) {
        for (var y = 0; y < cbQuestions[x].length; y++) {
            var pct = similarity(input, cbQuestions[x][y]);

            if (pct > 0.85) {
                addChatEntry(input, cbAnswers[x][y]);
            }
        }
    }

}

function addChatEntry(input, msg) {
    var messagesContainer = document.getElementById("messages");

    var userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `Yo: ${input}`;
    messagesContainer.appendChild(userDiv);

    var botDiv = document.createElement("div");
    var botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Escribiendo...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

    setTimeout(() => {
        botText.innerText = `Bot: ${msg}`;
      }, 2000);
}
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