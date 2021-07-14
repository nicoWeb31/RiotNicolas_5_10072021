import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MediaService } from 'src/app/core/core-media';
import { getMediaStart } from 'src/app/core/core-media/store/actions';
import { getAllMedias } from 'src/app/core/core-media/store/selectors/media.selector';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    
    this.store.select(getAllMedias).subscribe((medias) => console.log(medias));
  }
}
