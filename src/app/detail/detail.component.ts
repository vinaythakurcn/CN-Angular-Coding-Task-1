import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  allUsers$: Observable<User[]>;

  constructor(private usersService: UsersService) {
    // Retrieve all users from userStore to allUsers$
    //
    //
    // Then filter out male users from allUsers$ using RxJS Operators and pass to MaleComponent
    //
    //
    // And filter out female users from allUsers$ using RxJS Operators and pass to FemaleComponent
  }

  ngOnInit() {}
}
