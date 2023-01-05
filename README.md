# CN-Angular-Coding-Task-1

- **TASK 1**
  - Add functionality to Register Component using Reactive Form
    - Make `name` as required
    - Make `mobile` as required only if gender is **Male** and maximum of 10 character long
  - On submit, If form is valid then only save the user into userStore of UsersService as an Array of users
    For example [User1, User2, User3 ... ]
- **TASK 2**
  - Add functionality to `saveUser` and `getAllUser` method of **UsersService**
- **TASK 3**
  - Add functionality to DetailComponent using Reactive Pattern
    - Retrieve all users of `userStore` to `allUsers$` using `getAllUser` method of **UsersService**
    - Pass Male Users to male component in detail.component.html
    - Pass Female Users to female component in detail.component.html
- **TASK 4**
  - Convert the routing to use Lazy Routing Feature
  - Add CSS class `active` to the currently activated tab and apply CSS to highlight it
- **TASK 5**
  - Add Angular Material into the project and apply its UI components in Form, Table and Listing
