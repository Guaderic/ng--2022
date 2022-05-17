import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../modeles/IUser";
import {urls} from "../constants/urls";


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this
      .httpClient
      .get<IUser[]>(urls.users)
  }
  getUser(id:string): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users + '/' + id)
  }


}
