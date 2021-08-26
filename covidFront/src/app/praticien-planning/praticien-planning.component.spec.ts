import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienPlanningComponent } from './praticien-planning.component';

describe('PraticienPlanningComponent', () => {
  let component: PraticienPlanningComponent;
  let fixture: ComponentFixture<PraticienPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
