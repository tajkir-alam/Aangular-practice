import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student, Button],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'practice-1';
}
