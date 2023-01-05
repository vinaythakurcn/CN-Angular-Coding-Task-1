import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}