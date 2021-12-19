import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbInitService } from 'src/app/core/services/fb-init.service';
import { ICommentsAndLikes } from 'src/app/models/like';
import { IPaging } from 'src/app/models/pagination';
import { IComments } from 'src/app/models/post';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() data: ICommentsAndLikes;
  replies: IComments[];
  isCollapsed = true;
  hasLike: boolean
  page: IPaging;
  
  constructor(private fbService: FbInitService, private router: Router) { }

  ngOnInit(): void {
    this.hasLike = this.data.likes.summary.has_liked;
  }

  postReply(id: string, reply: string) {
    return this.fbService.postReply(id, reply).subscribe(res => {
      console.log(res);
      this.loadReplies(id);

    }, error => {
      console.log(error);
      this.router.navigate(['']);
    })
  }

  loadReplies(id: string) {
    console.log(id);
    this.fbService.getReplies(id).subscribe(res => {
      this.replies = res.data;
      this.page = res.paging;
      console.log(this.replies);
    }, error => {
      console.log(error);
    });
  }

  postLike(id: string) {

    if (this.hasLike) {
      this.fbService.deleteLike(id).subscribe(res => {
        console.log("delete" + id);
        console.log(res);
        this.hasLike = false;
      }, error => {
        console.log(error);
      });
    } else {
      this.fbService.postLike(id).subscribe(res => {
        console.log("post" + id);
        console.log(res);
        this.hasLike = true;
      }, error => {
        console.log(error);
      });
    }
  }
}
