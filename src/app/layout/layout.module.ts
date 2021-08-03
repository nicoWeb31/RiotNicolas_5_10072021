import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as layoutComponent from './components';

@NgModule({
  declarations: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
    layoutComponent.TagsComponent,
    layoutComponent.ButtonComponent,
    layoutComponent.DropDownComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    layoutComponent.HeaderBannerComponent,
    layoutComponent.NavigationComponent,
    layoutComponent.TagsComponent,
    layoutComponent.ButtonComponent,
    layoutComponent.DropDownComponent
  ],
})
export class LayoutModule {}
