import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-derivative-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './derivative-calculator.component.html',
  styleUrl: './derivative-calculator.component.css'
})
export class DerivativeCalculatorComponent {
  inputFunction: string = '';
  inputVariables: string = '';
  results: string[] = [];
  errorMessage: string = '';

  calculateDerivative() {
    try {
      // Parseamos la función ingresada
      const node = math.parse(this.inputFunction);

      // Obtenemos las variables del usuario y las separamos por comas
      const variables = this.inputVariables.split(',').map(v => v.trim());

      // Calculamos las derivadas parciales para cada variable
      this.results = variables.map(variable => {
        const derivativeNode = math.derivative(node, variable);
        return `∂(${this.inputFunction}) / ∂(${variable}) = ${derivativeNode.toString()}`;
      });

      this.errorMessage = '';
    } catch (error) {
      console.error('Error al calcular la derivada:', error);
      this.errorMessage = 'Error al calcular la derivada. Verifique la función y las variables.';
      this.results = [];
    }
  }
}