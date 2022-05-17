import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:IUser
  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      const {state:{data}} = history
      if(data){
        this.user = data
      }else{
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

}
