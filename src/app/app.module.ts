import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './layout/components/header-banner/header-banner.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
