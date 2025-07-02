import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  handleButton() {
    alert('Hi, Button has been clicked.');
    console.log("it's button");
  }
}
