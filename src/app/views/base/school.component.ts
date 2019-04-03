import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';
import {User} from '../../models/User';

@Component({
  templateUrl: 'school.component.html'
})
export class SchoolComponent implements OnInit {

  public manageUser;
  public users: User[] = [];
  public total = 100;
  public pageSize = 10;
  public page = 10;
  public maxSize = 5;

  constructor(public userService: UserServiceService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }



  public printMsg() {
    console.log('this is a click event');
  }

  public add() {
    console.log('this is a add event');
  }
}
