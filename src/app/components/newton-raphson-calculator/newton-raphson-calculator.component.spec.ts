import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtonRaphsonCalculatorComponent } from './newton-raphson-calculator.component';

describe('NewtonRaphsonCalculatorComponent', () => {
  let component: NewtonRaphsonCalculatorComponent;
  let fixture: ComponentFixture<NewtonRaphsonCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewtonRaphsonCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewtonRaphsonCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
