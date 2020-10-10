import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { from, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve <User[]> {


  constructor(private userService: UserService) {}

  resolve (): Observable <User[]> | Promise <User[]> | User[] {
    return this.userService.getUsers();
  }
}
