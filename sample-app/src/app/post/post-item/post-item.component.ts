import { Component, Input, OnInit } from '@angular/core';
import { FbInitService } from 'src/app/core/services/fb-init.service';
import { IFeed } from 'src/app/models/feed';
import { IPaging } from 'src/app/models/pagination';
import { IComments } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() feed: IFeed;
  comments: IComments[];
  page: IPaging;
  
  constructor(private fbService: FbInitService) { }

  ngOnInit(): void {
  }
}
