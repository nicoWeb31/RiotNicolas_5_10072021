import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPhotographComponent } from './components/cart-photograph/cart-photograph.component';
import { CartImageComponent } from './components/cart-image/cart-image.component';
import { LigthBoxModalComponent } from './components/ligth-box-modal/ligth-box-modal.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { HeaderPhotographComponent } from './components/header-photograph/header-photograph.component';
import { HomeComponent } from './components/home/home.component';
import { PhotographComponent } from './components/photograph/photograph.component';
import { PhotographRouting } from './photograph.-routing.module';
import { CoreModule } from '../core/core.module';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { getMediaStart } from '../core/core-media/store/actions';
import { getPhotographStart } from '../core';
import { LayoutModule } from '../layout/layout.module';
import { CardMediaComponent } from './components/card-media/card-media.component';
import { MediasComponent } from './components/medias/medias.component';
import { BoxPriceLikeComponent } from './components/box-price-like/box-price-like.component';

@NgModule({
  declarations: [
    CartPhotographComponent,
    CartImageComponent,
    LigthBoxModalComponent,
    FormModalComponent,
    HeaderPhotographComponent,
    HomeComponent,
    PhotographComponent,
    CardMediaComponent,
    MediasComponent,
    BoxPriceLikeComponent,
  ],
  imports: [CommonModule, PhotographRouting, CoreModule, LayoutModule],
})
export class PhotographModule {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(getMediaStart());
    this.store.dispatch(getPhotographStart());

  }
}
