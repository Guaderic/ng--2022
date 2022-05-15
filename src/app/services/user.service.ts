import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUSer";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) {
  }


  getUsers():Observable<IUser[]>{
    return this
      .http
      .get<IUser[]>(urls.users)

  }
  getUser(id: number):Observable<IUser>{
    return this
      .http
      .get<any>(urls.users + '/' + id);

  }
}
