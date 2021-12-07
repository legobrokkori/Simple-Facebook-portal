import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SliderBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SliderBarComponent]
})
export class CoreModule { }
