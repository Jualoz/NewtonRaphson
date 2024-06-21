import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as math from 'mathjs';

@Component({
  selector: 'app-derivative-calculator',
  standalone: true,
  imports: [
    CommonModule,
    
    FormsModule],
  templateUrl: './derivative-calculator.component.html',
  styleUrl: './derivative-calculator.component.css'
})
export class DerivativeCalculatorComponent {
  inputFunction: string = '';
  variables: string[] = ['x', 'y']; // Define las variables que deseas usar
  results: string[] = [];

  calculateDerivative() {
    try {
      // Parseamos la función ingresada
      const node = math.parse(this.inputFunction);

      // Calculamos las derivadas parciales para cada variable
      this.results = this.variables.map(variable => {
        const derivativeNode = math.derivative(node, variable);
        return derivativeNode.toString();
      });
    } catch (error) {
      console.error('Error al calcular la derivada:', error);
      this.results = ['Error al calcular la derivada'];
    }
  }
}