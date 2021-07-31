import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponent from './components';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';
import { ButtonComponent } from './components/button/button.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { ReactiveFormsModule } from '@angular/forms';

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
