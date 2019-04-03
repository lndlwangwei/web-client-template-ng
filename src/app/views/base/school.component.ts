import { Component } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  templateUrl: 'school.component.html'
})
export class SchoolComponent {

  public manageUser;

  constructor(public userService: UserServiceService) {
    this.userService.getUsers().subscribe(response => {
      console.log(response);
    });
  }

  public printMsg() {
    console.log('this is a click event');
  }

  public add() {
    console.log('this is a add event');
  }
}
