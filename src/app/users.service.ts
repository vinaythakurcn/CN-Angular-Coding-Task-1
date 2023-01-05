import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private userStore = new BehaviorSubject<User[]>([]);

  constructor() {}

  saveUser(user: User) {
    // Push this new user into the array of userStore
  }

  getAllUser(): Observable<User[]> {
    // return users array from userStore

    return of([] as User[]); // Delete this line when implementing functionality
  }
}
