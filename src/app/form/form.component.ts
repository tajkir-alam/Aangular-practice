import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  data: any = {};

  constructor() {}

  ngOnInit(): void {}

  handleForm(data: NgForm) {
    console.log(data);
    this.data = data;
  }
}
