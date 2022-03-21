import { async, TestBed, waitForAsync } from "@angular/core/testing";

describe('Prueba de como se crea componente a partir de test', () => {
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
        expect(componentInstance).toBeTruthy; 
    }))

















})