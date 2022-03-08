import { ElementRef, Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver'
@Injectable({
  providedIn: 'root'
})
export class TableToExcelService {

  constructor() { }

  exportToExcel( tablaHTML: ElementRef){
    let [camposDeTabla, datosDeTabla] = this.convertHTMLTableToJSON(tablaHTML.nativeElement); 
    let libroDeExcel = new Workbook(); 
    let hojaDeLibro = libroDeExcel.addWorksheet('preciosAFuturo');
    hojaDeLibro.addRow(camposDeTabla); 
    datosDeTabla.forEach(filaDeDatos => {
      console.log(filaDeDatos)
      hojaDeLibro.addRow(filaDeDatos)
    }); 

    hojaDeLibro.getRow(1).fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FFb4e1bc'}
    }; 
    hojaDeLibro.getRow(1)






    //set downloadable file name
    let fname="PreciosAFuturo"

    //add data and file name and download
    libroDeExcel.xlsx.writeBuffer().then((data) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
});

  }
  convertHTMLTableToJSON(tablaHTML: HTMLElement) : [  Array<String>, Array<String[]>] { //Esta funcion devuelve un JSON con los datos de la tabla y un array de campos de header de la tabla

    let header = Array.from(tablaHTML.querySelectorAll('thead tr:last-of-type th')).map( (headCell:HTMLElement) =>  headCell.innerText); 
    let data = (Array.from(tablaHTML.querySelectorAll('tbody tr'))).map( (dataRow:HTMLElement)  => {
      return Array.from(dataRow.querySelectorAll('td')).map((dataCell:HTMLElement) => {
        return dataCell.innerText; 
      })
    }); 
    return [header,data]; 

    
  }
}
