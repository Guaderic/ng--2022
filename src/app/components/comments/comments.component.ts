import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  members:string[] = [];
  newMember = '';
  errorMessage = '';
  constructor() { }

  ngOnInit(): void {
  }
  addMember() {
    if(!this.newMember){
      this.errorMessage = 'comment is empty'
      return
    }
    this.errorMessage = ''
    this.members.push(this.newMember)
    this.newMember = ''

  }

  onInput(member:string) {
    this.newMember = member;


  }
}
