import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePhotographModule } from './core-photograph/Core-photograph.module';
import { CoreMediaModule } from './core-media';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CorePhotographModule, CoreMediaModule
  ],
  exports : [CorePhotographModule, CoreMediaModule],
})
export class CoreModule { }
