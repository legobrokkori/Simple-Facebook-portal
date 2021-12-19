import { Component, OnInit } from '@angular/core';
import { FbInitService } from '../core/services/fb-init.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fbService: FbInitService) { }

  ngOnInit(): void {
  }

  login() {
    this.fbService.login();
  }
}
