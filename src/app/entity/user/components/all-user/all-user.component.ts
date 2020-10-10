import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../../../../entity/user/service/user.service";
import { User } from '../../../../models/User';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];

  constructor(/*private userService: UserService,*/
              private activatedRoute: ActivatedRoute
    ) {
    // this.userService.getUsers().subscribe(value => this.usersList = value);
      // this.activatedRoute.data.subscribe(value => console.log(value))
      this.activatedRoute.data.subscribe(value => this.usersList = value.xxx)
  }

}
