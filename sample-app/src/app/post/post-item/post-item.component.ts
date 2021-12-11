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
  isCollapsed = false;
  expandContent = true;
  data1 = [{
    'name': 'john',
    'place': 'forest',
    'phone': '124-896-8963',
    'expanded': false
  }, {
    'name': 'Jay',
    'place': 'City',
    'phone': '124-896-1234',
    'expanded': false
  }, {
    'name': 'Joseph',
    'place': 'sky',
    'phone': '124-896-9632',
    'expanded': false
  },
  ]

  data2 = [{
    'whoseData': 'john',
    'datades': {
      'name': 'john',
      'hobbies': 'singing',
      'profession': 'singer'
    }
  }, {
    'whoseData': 'Jay',
    'datades': {
      'name': 'jay',
      'hobbies': 'coding',
      'profession': 'coder'
    }
  }, {
    'whoseData': 'Jay',
    'datades': {
      'name': 'jay',
      'hobbies': 'testing',
      'profession': 'tester'
    }
  }
  ]

  findDetails(data) {
    return this.data2.filter(x => x.whoseData === data.name);
  }
  
  constructor(private fbService: FbInitService) { }

  ngOnInit(): void {
  }
}
