import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  title = ''
  page:number = 1;
  count:number = 0;
  pageSize = 7;
  pageSizes = [3, 6, 9];
  currentPost: IPost;
  currentIndex = -1;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.postService.getAllPosts().subscribe(value => this.posts = value)
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.postService.getAllPosts(params)
      .subscribe({
        next: response => {
          const {posts, totalItems} = response;
          this.posts = posts;
          this.count = totalItems;
          console.log(response);
        },
        error: error => {
          console.log(error);
        }
      });
  }

  handleChangePage(event: number): void {

    this.page = event;

  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }



}
