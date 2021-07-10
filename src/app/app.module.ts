import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
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
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
