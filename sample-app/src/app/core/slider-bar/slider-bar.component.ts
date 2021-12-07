import { Component, OnInit } from '@angular/core';
import { FbInitService } from '../services/fb-init.service';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.scss']
})
export class SliderBarComponent implements OnInit {

  constructor(private fbService: FbInitService) { }

  ngOnInit(): void {
  }

  login() {
    this.fbService.login();
  }

  loadPosta() {
    this.fbService.getPosts()
    .subscribe()
  }
}
