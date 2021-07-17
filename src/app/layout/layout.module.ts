import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponent from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
  ],
})
export class LayoutModule {}
