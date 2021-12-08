import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbInitService } from 'src/app/core/services/fb-init.service';
import { IComments } from 'src/app/models/comment';
import { IPaging } from 'src/app/models/pagination';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  comments: IComments[];
  page: IPaging;

  constructor(private fbService: FbInitService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.fbService.getComments(this.activateRoute.snapshot.paramMap.get('id')).subscribe(res => {
      this.comments = res.data;
      this.page = res.paging;
      console.log(this.comments);
    }, error => {
      console.log(error);
    });
  }
}
