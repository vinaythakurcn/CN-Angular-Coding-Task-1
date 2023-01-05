import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}