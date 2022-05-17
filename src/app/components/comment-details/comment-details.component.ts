import { Component, OnInit } from '@angular/core';
import {IComment} from "../../models";
import {CommentService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment:IComment
  constructor(private commentService:CommentService,
              private router:Router,
              private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment']
      if(state){
        this.comment = state;
      }else {
        this.commentService.getById(id).subscribe(value => this.comment = value);
      }
    })
  }

}
