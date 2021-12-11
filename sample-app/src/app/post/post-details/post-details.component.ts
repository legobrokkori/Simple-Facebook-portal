import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbInitService } from 'src/app/core/services/fb-init.service';
import { IComments } from 'src/app/models/post';
import { IPaging } from 'src/app/models/pagination';
import { ICommentsAndLikes } from 'src/app/models/like';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  datas: ICommentsAndLikes[];
  page: IPaging;

  constructor(private fbService: FbInitService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.fbService.getComments(this.activateRoute.snapshot.paramMap.get('id')).subscribe(res => {
      //this.comments = res.comments.data;
      //this.likes = res.likes.
      this.datas = res.data;
      this.page = res.paging;
      console.log(this.datas);
    }, error => {
      console.log(error);
    });
  }
}
