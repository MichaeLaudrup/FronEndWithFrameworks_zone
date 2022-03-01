import { EventEmitter } from "@angular/core";

export class preciosService {
    
    eventoConmutaColumna = new EventEmitter<number>(); 
    ocultarGrupo(numGrupo:number){
        this.eventoConmutaColumna.emit(numGrupo); 
    }
}