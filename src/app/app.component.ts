import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DerivativeCalculatorComponent } from './components/derivative-calculator/derivative-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DerivativeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewtonRaphson';
}
