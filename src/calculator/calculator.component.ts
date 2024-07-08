import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  prevValue: string = "";
  mainValue: string = "0";
  operator: string = "";
  value(d: string) {
    this.mainValue = Number(this.mainValue + d).toString();
  }
  operatorValue(o: string) {
    this.operator = o;
    this.prevValue = this.mainValue;
    this.mainValue = "0";
  }
  result() {
    switch (this.operator) {
      case '+':
        this.mainValue = (Number(this.prevValue) + Number(this.mainValue)).toString();
        break;

      case '-':
        this.mainValue = (Number(this.prevValue) - Number(this.mainValue)).toString();
        break;

      case "*":
        this.mainValue = (Number(this.prevValue) * Number(this.mainValue)).toString();
        break;

      case "/":
        this.mainValue = (Number(this.prevValue) / Number(this.mainValue)).toString();
        break;

      default:
        this.mainValue = "Error";
        break;

    }
    this.prevValue = "Result:"
    this.operator = "=";
  }
  reset() {
    this.mainValue = "0";
    this.prevValue = "";
    this.operatorValue("");
  }
}