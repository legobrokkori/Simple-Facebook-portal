import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbInitService } from 'src/app/core/services/fb-init.service';
import { IPaging } from 'src/app/models/pagination';
import { ICommentsAndLikes } from 'src/app/models/like';
import { IComments } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  comment: IComments;
  datas: ICommentsAndLikes[];
  page: IPaging;

  constructor(private fbService: FbInitService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.fbService.getPost(id).subscribe(res => {
      this.comment = res;
      this.getComments(id);
    }, error => {
      console.log(error);
      this.router.navigate(['']);
    });


  }

  postComment(comment: string) {
    return this.fbService.postReply(this.activateRoute.snapshot.paramMap.get('id'), comment).subscribe(res => {
      console.log(res);
      this.loadComments();

    }, error => {
      console.log(error);
    })
  }

  private getComments(id: string) {
    return this.fbService.getComments(id).subscribe(res => {
        this.datas = res.data;
        this.page = res.paging;
        console.log(this.datas);
      }, error => {
        console.log(error);
      });
  }
}
