import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [NgFor],
  templateUrl: './loop.html',
  styleUrl: './loop.css',
})
export class Loop {
  users = ['rion', 'rafin', 'rahil', 'yamin', 'emon'];
}
