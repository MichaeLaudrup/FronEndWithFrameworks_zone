import {LitElement, html} from 'lit-element';
import './dayView.js'; 
export class CalendarView extends LitElement {
    
    constructor(){
        super(); 
    }

    static get properties() {
        return {
            fechaActual: {type: Date}
        }
    }

    //Plantilla inicial
    render(){
        return html`
        <style>
            .contenedorHojaCalendario {
                display:grid; 
                grid-template-columns: repeat(7,1fr); 
            }
            .diaSemana{
                font-size:2vw; 
                display:flex; 
                background-color: #9EFFF1;
                justify-content:center;
                align-items:center;  
                width:100%;
                height:100%; 
                border-top: 2px solid black;     
            }

        </style>
           ${this.contruirCalendario()}         
           `; 
    }
    
    actualizarDia(evento){
        console.log("Se modifica el dia de la hoja de calendario"); 
        const dia = +(evento.target.getAttribute("diames"));
        this.fechaActual = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), dia); 
    }
    /*
      Este metodo construye el calendario tanto inicialmente como cuando se actualiza la fecha
    */
    contruirCalendario(){
        const _weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; //Un array constante que tienes los dias de la semana
        let contenedorCalendario = document.createElement('div'); //Se crea el contedor global calendario (que es un grid de 7col x 6fil)
        contenedorCalendario.addEventListener('click', this.actualizarDia.bind(this));
        contenedorCalendario.classList.add('contenedorHojaCalendario'); //Se inserta la clase que configura el contenedor global de calendario como un grid y otros formatos
        _weekDays.forEach(diaSemana => {
            contenedorCalendario.innerHTML += `<div class="diaSemana" ><p>${diaSemana}</p></div>` //se inserta al grid los dias {lunes,martes,...etc} como cabecera
        }); 
        contenedorCalendario = this.dameCalendarioRellenado(contenedorCalendario); //Se invoca metodo que devuelve la hoja de dias rellanada
        return contenedorCalendario; //Se devuelve el elemento HTML creado  
    }

    /*
     * Este metodo recibe una grid de tipo de calendario con los primeros 7 dias de la semana insertado (lunes, martes...etc)
     * y se encarga de rellenar tanto los dias iniciales vacios, los dias propios del mes como los dias finales
     *  @param calendario en formato grid de 7 columnas x 6 filas con primera fila completamente llena de los dias de la semana.
    */
    dameCalendarioRellenado(contenedorCalendario){
        this.fechaActual = new Date(this.fechaActual);
        const mes = this.fechaActual.getMonth()+1; //Mes de la fecha recibida en el calendario
        const anio = this.fechaActual.getFullYear(); //Anio de la fecha recibida en el calendario
        const dia = this.fechaActual.getDate(); 
        const comienzoMes = new Date(anio,mes-1,1).getDay(); //Se obtiene el dia de comienzo del mes (0 -Domingo, 1- Lunes, .... 6- Sabado) 
        const numDiasMes = (new Date(anio, mes, 0)).getDate(); //este pequeño truco devuelve el numero de dias de un mes 
        let posActual = 0; //Estamos inicialmente en el lunes [0]

        //Se imprimen los primeros dias en blanco del mes (por ejemplo, empieza un jueves el mes, se imprime lunes, martes y miercoles en blanco)
        for(let j = 1; j < comienzoMes; j++){
            contenedorCalendario.innerHTML += `<day-view diames=-1></day-view>`; //La manera de indicar que este dia no es un numero es mediante el -1
            posActual++; //se va controlando la posicion en la que vamos rotando en el calendario  
        }
        
        //Se imprimen todos los dias del mes
        for(let i = 1; i <= numDiasMes; i++){
            contenedorCalendario.innerHTML += `<day-view diames=${i} ${(i === dia ) ?  'diaseleccionado' : ''}></day-view>`; //Ademas de insertar los dias se comprueba 
                                                                                                                            //Si es un dia seleccionado por el usuario
            posActual++; //seguimos controlando la posicion actual en el calendario 
        }

        //Se imprimen los ultimos huecos en blanco 
        for(let k = 1; k <= 7-(posActual%7);k++ ){
            contenedorCalendario.innerHTML += `<day-view diames=-1></day-view>`; //Se insertan el resto de dias del mes en vacio indicandolo con -1
        }
        return contenedorCalendario; 
    }


    //Devuelve la fecha actual del elemento
    dameFechaActual(){
        return this.fechaActual; 
    }
}
customElements.define('calendar-sheet', CalendarView);