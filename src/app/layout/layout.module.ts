import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponent from './components';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
    layoutComponent.TagsComponent,
    layoutComponent.ButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
    layoutComponent.TagsComponent,
    layoutComponent.ButtonComponent,
  ],
})
export class LayoutModule {}
