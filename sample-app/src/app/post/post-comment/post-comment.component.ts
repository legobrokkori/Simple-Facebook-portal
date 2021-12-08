import { Component, Input, OnInit } from '@angular/core';
import { IComments } from 'src/app/models/comment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() comment: IComments;
  
  constructor() { }

  ngOnInit(): void {
  }

}
