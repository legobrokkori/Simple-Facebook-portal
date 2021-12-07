import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path: '', component: PostComponent},
  {path: ':id', component: PostDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
