import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoColumnasComponent } from './filtrado-columnas.component';

describe('FiltradoColumnasComponent', () => {
  let component: FiltradoColumnasComponent;
  let fixture: ComponentFixture<FiltradoColumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoColumnasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
