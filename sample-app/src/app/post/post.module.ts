import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    PostComponent,
    PostItemComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
