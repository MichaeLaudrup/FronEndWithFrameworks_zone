import { LitElement, html } from 'lit-element';


/*
 * Cada dia del calendario (cada casilla) esta determinada por esta
 * vista 
 */
class dayView extends LitElement {
    constructor(){
        super(); 
    }
    static get properties(){
        return {
            diames: {type: Number},
            diaseleccionado: {type: Boolean}
        };
    } 
    render(){
        return html`
        <style>
          #cuadradoDia{
              display:flex; 
              align-items: center; 
              justify-content:center; 
              background-color: #9BD0F5;
              font-size:2vw;  
              opacity:0.5; 
          }

          #cuadradoDia:hover{ 
            opacity:1 !important;   
          }

          .seleccionarDia {
            opacity:1 !important; 
          }

        </style>
        <div id="cuadradoDia" class="${this.diaseleccionado ? 'seleccionarDia' : ''}">
            <p id="numeroDia">${(this.diames === -1) ? '-' : this.diames }</p>
        </div>
        `; 
    }
}
customElements.define('day-view', dayView);