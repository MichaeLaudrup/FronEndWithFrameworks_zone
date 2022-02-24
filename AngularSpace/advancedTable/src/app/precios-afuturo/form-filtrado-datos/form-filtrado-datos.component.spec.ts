import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiltradoDatosComponent } from './form-filtrado-datos.component';

describe('FormFiltradoDatosComponent', () => {
  let component: FormFiltradoDatosComponent;
  let fixture: ComponentFixture<FormFiltradoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFiltradoDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiltradoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
