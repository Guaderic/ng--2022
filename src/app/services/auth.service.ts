import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";
import {IToken} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access'


  constructor(private httpClient:HttpClient) {

  }
  register(user:IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user:IUser):Observable<IToken>{
    return this.httpClient.post<IToken>(urls.auth, user)

  }
  setItem(token:IToken):void{
    localStorage.setItem(this.accessTokenKey, token.access)
  }
  getToken(): string{
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  isAuthorization():boolean{
   return !! localStorage.getItem(this.accessTokenKey)
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }
}
