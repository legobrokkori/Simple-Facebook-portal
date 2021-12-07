import { Component, Input, OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private fbService: FacebookService) { }

  ngOnInit(): void {
  }

}
