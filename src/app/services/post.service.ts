import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {




  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this
      .http
      .get<IPost[]>(urls.posts)
  }
}
