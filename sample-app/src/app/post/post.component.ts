import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private fbService: FbInitService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.fbService.getPosts().subscribe(res => {
      this.feeds = res.data;
      this.page = res.paging;
      console.log(this.feeds);
      console.log(new Date(this.feeds[0].created_time));
    }, error => {
      if (error.status === 401) {
        this.fbService.login();
      } else {
        this.router.navigate(['']);
      }
      console.log(error.status);
    });
  }

  showMore() {
    this.fbService.showMore(this.page.next).subscribe(res => {
      this.feeds = this.feeds.concat(res.data);
      this.page = res.paging;
    }, error => {
      console.log(error);
    });
  }
}
