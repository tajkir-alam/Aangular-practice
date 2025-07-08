import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  input1_value: string = '';
  handleInput(value: string) {
    console.log('input working');
    this.input1_value = value;
  }
}
