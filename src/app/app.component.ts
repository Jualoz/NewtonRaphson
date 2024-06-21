import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DerivativeCalculatorComponent } from './components/derivative-calculator/derivative-calculator.component';
import { NewtonRaphsonCalculatorComponent } from './components/newton-raphson-calculator/newton-raphson-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DerivativeCalculatorComponent,
    NewtonRaphsonCalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewtonRaphson';
}
