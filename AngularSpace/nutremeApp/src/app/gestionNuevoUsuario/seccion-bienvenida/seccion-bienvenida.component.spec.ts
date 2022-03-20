import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBienvenidaComponent } from './seccion-bienvenida.component';

describe('SeccionBienvenidaComponent', () => {
  let component: SeccionBienvenidaComponent;
  let fixture: ComponentFixture<SeccionBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
