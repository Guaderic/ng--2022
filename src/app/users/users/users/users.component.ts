import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserDataService} from "../../../services/user-data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[]
  constructor(private userService:UserDataService){

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

}
