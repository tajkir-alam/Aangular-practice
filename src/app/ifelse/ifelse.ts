import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [NgIf],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  show = false;
  color = 'red';
}
