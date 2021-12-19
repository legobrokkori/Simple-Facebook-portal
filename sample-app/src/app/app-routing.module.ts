import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'post',
  canActivate: [AuthGuard],
  loadChildren: () => import('./post/post.module').then(mod => mod.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
