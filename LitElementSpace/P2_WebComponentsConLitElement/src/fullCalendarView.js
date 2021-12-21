import { LitElement , html} from 'lit-element';
import { CalendarView } from './calendarSheetView';
import './dayView.js'; 
export class FullCalendarView extends LitElement {

    constructor(){
        super();
        //Se declaran los meses del anio a nivel literal para imprimir fechas embellecidas 
        this._meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
        //Inicialmente el calendario se inicia en una fecha actual
        this.fechaActual= new Date();
    }


    static get properties() {
        return {
            fechaActual: {type: Date}
        }
    }

    //Renderizado de plantilla
    render(){
        return html`
        <style>      
            .cabecera{
                background-color: #9BD0F5; 
                display:grid; 
                grid-template-columns: 1fr 4fr 1fr;
                padding:1em; 
                justify-items:center;  
                align-items:center; 
            }
            #descripcionFecha{
                margin-top:1em; 
                text-align:center; 
                font-size:1.6em; 
            }

            footer {
                background-color: #9BD0F5;  
                height:4em; 
                display:flex; 
                justify-content:center;
                align-items:center; 
                color:black;  
            }
        </style>  
        <div>
        <div class="cabecera">
               <div><button @click="${this.mesAnterior}"><<<<<</button></div>
               <div>
                    <input @change="${this.actualizarFecha}" id="fechaEntrada" type="date" style="width:100%; "> <br>
                    <div id="descripcionFecha">${this.fechaEmbellecida()}</div>
               </div>
               <div><button @click="${this.mesPosterior}">>>>>></button></div>
            </div>
            <calendar-sheet id="x" fechaactual="${this.fechaActual}" @click="${this.actualizacionFecha}"></calendar-sheet>

        </div> 
        <footer>
            <div>&copy; Michael Laudrup Luis Gonzalez</div>
        </footer>
            
            `;       
    }

    //Cuando se hace click en una hoja de calendario se dispara un evento que actualiza la fecha de la cabecera
    actualizacionFecha(e){
        this.fechaActual = e.target.dameFechaActual(); 
    }

    //actualizacion de fecha con un input 
    actualizarFecha(e){
        this.fechaActual = new Date(e.target.value); ; 
    }

    //Imprime la fecha en formato embellecido
    fechaEmbellecida(){
        return `${this.fechaActual.getDate()} de ${this._meses[this.fechaActual.getMonth()]} de ${this.fechaActual.getFullYear()}`; 
    }

    //Actualiza la fecha al mes posterior
    mesPosterior(){
        const anio = (this.fechaActual.getMonth() < 11) ? this.fechaActual.getFullYear() : this.fechaActual.getFullYear()+1 ; 
        const mes = (this.fechaActual.getMonth()+1) %12; 
        const dia = this.fechaActual.getDate(); 
        this.fechaActual = new Date(anio,mes,dia); 
    }

    //Actualiza la fecha al mes anterior
    mesAnterior(){
        const anio = (this.fechaActual.getMonth() === 0 ) ? this.fechaActual.getFullYear()-1 : this.fechaActual.getFullYear() ; 
        const mes = (this.fechaActual.getMonth()-1) %12; 
        const dia = this.fechaActual.getDate(); 
        this.fechaActual = new Date(anio,mes,dia); 
    }
}
customElements.define('calendar-view', FullCalendarView);