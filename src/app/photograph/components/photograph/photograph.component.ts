import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPhotograph, Media, Photograph, photographById } from 'src/app/core';
import { mediaByPhotographId } from 'src/app/core/core-media/store';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-photograph',
  templateUrl: './photograph.component.html',
  styleUrls: ['./photograph.component.scss'],
})
export class PhotographComponent implements OnInit {
  photographId!: string | null;
  photographInfo!: Observable<Photograph | null | undefined> | null;
  medias!: Observable<Media[]> | null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    //recuper id du photograph
    this.photographId = this.route.snapshot.paramMap.get('id');
    console.log(this.photographId);

    //recup info du photographInfo
    this.photographInfo = this.photographId
      ? this.store.select(photographById(+this.photographId))
      : null;

    this.photographInfo?.subscribe((data) => console.log(data));

    //recup items du photograph
    this.medias = this.photographId
      ? this.store.select(mediaByPhotographId(+this.photographId))
      : null;
    this.medias?.subscribe(data=>console.log(data))
  }
}
