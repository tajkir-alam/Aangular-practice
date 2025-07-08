import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { Button } from './button/button';
import { Input } from './input/input';
import { PropertyBinding } from './property-binding/property-binding';
import { Ifelse } from './ifelse/ifelse';
import { Loop } from './loop/loop';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Student,
    Button,
    Input,
    PropertyBinding,
    Ifelse,
    Loop,
    Form,  
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'practice-1';
}
