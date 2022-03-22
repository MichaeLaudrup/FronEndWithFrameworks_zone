import { async, TestBed, waitForAsync } from "@angular/core/testing";
import { ComponentFromTest } from "./ComponentFromTest.component";

describe('Component from test: Prueba de como se crea componente a partir de test', () => {
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [
                ComponentFromTest
            ]
        });
    }); 

    it('Debe crear el componente', waitForAsync(() => {
        let fixture = TestBed.createComponent(ComponentFromTest); 
        let componentInstance = fixture.debugElement.componentInstance; 
        expect(componentInstance).toBeTruthy(); 
    }))

    it('El componente debe tener dos entradas de tipo numero', waitForAsync(() => {
        let fixture = TestBed.createComponent(ComponentFromTest); 
        let componentDOM = fixture.debugElement.nativeElement; 
        expect(componentDOM.querySelectorAll('input[type="number"]').length).toEqual(2); 
    }))

    it('El componente debe tener un elemento de tipo div con un id igual a "resultado" para mostrar el resultado', waitForAsync(() => {
        let fixture = TestBed.createComponent(ComponentFromTest); 
        let componentDOM = fixture.debugElement.nativeElement; 
        expect(componentDOM.querySelector('div#resultado')).toBeTruthy(); 
    }))

    it('Los cuatro botones tienen que tener los textos "sumar", "restar", "dividir" y "multiplicar" ', waitForAsync(() => {
        let fixture = TestBed.createComponent(ComponentFromTest); 
        let componentDOM = fixture.debugElement.nativeElement; 
        let listadoBotones = componentDOM.querySelectorAll('button');
        expect(listadoBotones.length).toEqual(4);
        let existeSumar: boolean, existeDividir:boolean, existeMultiplicar:boolean, existeRestar:boolean; 
         existeSumar = existeRestar = existeMultiplicar = existeDividir = false; 
        (Array.from(listadoBotones)).forEach( (button:HTMLElement) => {
            switch(button.innerText.toLocaleLowerCase()){
                case 'sumar':
                    existeSumar = true; 
                    break; 
                case 'restar': 
                    existeRestar = true; 
                    break; 
                case 'multiplicar': 
                    existeMultiplicar = true; 
                    break; 
                case 'dividir':
                    existeDividir = true; 
                    break; 
            }
        });
        expect(existeDividir && existeMultiplicar && existeRestar && existeSumar).toBeTrue(); 

    }))

















})