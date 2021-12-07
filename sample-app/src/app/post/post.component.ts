import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FbInitService } from '../core/services/fb-init.service';
import { IFeed } from '../models/feed';
import { IPaging } from '../models/pagination';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  feeds: IFeed[];
  page: IPaging;
  
  constructor(private fbService: FbInitService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.fbService.getPosts().subscribe(res => {
      this.feeds = res.data;
      this.page = res.paging;
      console.log(this.feeds);
    }, error => {
      console.log(error);
    });
  }
}
