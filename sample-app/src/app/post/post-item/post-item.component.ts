import { Component, Input, OnInit } from '@angular/core';
import { IFeed } from 'src/app/models/feed';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() feed: IFeed;

  constructor() { }

  ngOnInit(): void {
  }

}
