import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPhotograph, Photograph } from 'src/app/core';
import { getAllMedias } from 'src/app/core/core-media/store/selectors/media.selector';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photographes$!: Observable<Photograph[] | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getAllMedias).subscribe((medias) => console.log(medias));
    this.photographes$ = this.store.select(getPhotograph);
  }
}


// En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.

