import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDatosComponent } from './panel-datos.component';

describe('PanelDatosComponent', () => {
  let component: PanelDatosComponent;
  let fixture: ComponentFixture<PanelDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
