import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBarComponent } from './slider-bar/slider-bar.component';



@NgModule({
  declarations: [SliderBarComponent],
  imports: [
    CommonModule
  ],
  exports: [SliderBarComponent]
})
export class CoreModule { }
