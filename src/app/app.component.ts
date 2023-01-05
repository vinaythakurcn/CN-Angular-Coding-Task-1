import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
/* 
  CODING TASK
  --------------
    TASK 1
  1.  Add functionality to Register Component
      1.  Make "name" as required
      2.  Make "mobile" as required only if gender is "Male" and maximum of 10 character long
      3.  On submit, If form is valid then only save the user into userStore of UsersService as an Array of users
        For example [User1, User2, User3 ... ] 
  ------------------ 
    TASK 2
  2.  Add functionality to "saveUser" and "getAllUser" method of UsersService
  ------------------ 
    TASK 3
  3. Add functionality to DetailComponent
    1.  Retrieve all users of userStore to allUsers$ using "getAllUser" method of UsersService
    2.  Pass Male Users to male component in detail.component.html
    3.  Pass Female Users to female component in detail.component.html
  ------------------ 
    TASK 4
  4.  
    1.  Convert the routing to use Lazy Routing Feature
    2.  Add CSS class "active" to the currently activated tab
  ------------------ 
    TASK 5
  5.  
    1.  Add Angular Material into the project and apply its UI components in Form, Table and Listing

 */
