import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";
import {IPost} from "../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post:IPost

  constructor(private router:Router,
              private activateRoute: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost
      if(state) {
        this.post = state
      }else{
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

}
