import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderBannerComponent } from './layout/components/header-banner/header-banner.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { appReducer } from './store/app-state';
import { environment } from 'src/environments/environment';
import { MediaEffect } from './core/core-media/store/media.effects';
import { EffectsModule } from '@ngrx/effects';
import { PhotographEffect } from './core';

@NgModule({
  declarations: [AppComponent, HeaderBannerComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MediaEffect,PhotographEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
