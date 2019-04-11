import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/User';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  public currentUser: User = new User();

  constructor(private actionModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
