import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-newton-raphson-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './newton-raphson-calculator.component.html',
  styleUrl: './newton-raphson-calculator.component.css'
})
export class NewtonRaphsonCalculatorComponent {
  inputFunction: string = '';
  initialValue: number = 0;
  solution: number | undefined;
  errorMessage: string = '';

  calculateNewtonRaphson() {
    try {
      // Parseamos la función ingresada
      const node = math.parse(this.inputFunction);

      // Definimos la función evaluada y su derivada
      const func = math.compile(node.toString());
      const derivativeNode = math.derivative(node, 'x');
      const derivativeFunc = math.compile(derivativeNode.toString());

      // Definimos la función de iteración para Newton-Raphson
      const newtonRaphsonIteration = (x0: number) => x0 - func.evaluate({ x: x0 }) / derivativeFunc.evaluate({ x: x0 });

      // Aplicamos el método de Newton-Raphson
      let x0 = this.initialValue;
      const maxIterations = 50;
      const tolerance = 1e-8;
      let iteration = 0;
      let x1 = x0;

      while (Math.abs(x1 - x0) > tolerance && iteration < maxIterations) {
        x0 = x1;
        x1 = newtonRaphsonIteration(x0);
        iteration++;
      }

      if (iteration === maxIterations) {
        throw new Error('Exceeded maximum iterations. No solution found.');
      }

      // Mostramos la solución encontrada
      this.solution = x1;
      this.errorMessage = '';
    } catch (error) {
      console.error('Error al calcular Newton-Raphson:', error);
      this.errorMessage = 'Error al calcular Newton-Raphson. Verifique la función y el valor inicial.';
      this.solution = undefined;
    }
  }
}
