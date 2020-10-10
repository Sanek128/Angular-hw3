import { Component } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./entity/user/service/user.service";
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-hw3';
  // private http: HttpClient = new HttpClient();
  
  
  // usersList: User[] = [];

  // constructor(private userService: UserService) {
  //   this.userService.getUsers().subscribe(value => this.usersList = value);
  
  constructor() {}
    
    // constructor(private http: HttpClient) {
    // this.http.get <any[]> ('https://jsonplaceholder.typicode.com/users').subscribe(users => {
    //   console.log(users);
    //   this.usersList = users;
    // });

}
