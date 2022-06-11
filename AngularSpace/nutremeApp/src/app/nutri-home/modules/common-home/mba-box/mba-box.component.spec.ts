import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaBoxComponent } from './mba-box.component';

describe('MbaBoxComponent', () => {
  let component: MbaBoxComponent;
  let fixture: ComponentFixture<MbaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbaBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
