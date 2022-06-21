import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacronutrientsChartComponent } from './macronutrients-chart.component';

describe('MacronutrientsChartComponent', () => {
  let component: MacronutrientsChartComponent;
  let fixture: ComponentFixture<MacronutrientsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacronutrientsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacronutrientsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
