import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Media, Photograph, photographById } from 'src/app/core';
import { mediaByPhotographId } from 'src/app/core/core-media/store';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-photograph',
  templateUrl: './photograph.component.html',
  styleUrls: ['./photograph.component.scss'],
})
export class PhotographComponent implements OnInit {
  photographId!: string | null;
  photographInfo$!: Observable<Photograph | null | undefined> | null;
  medias!: Observable<Media[]> | null;
  price!: number | null | undefined;
  likes!: number | null | undefined;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.photographId = this.route.snapshot.paramMap.get('id');

    //recup info du photographInfo
    this.photographInfo$ = this.photographId
      ? this.store.select(photographById(+this.photographId))
      : null;
    this.photographInfo$?.subscribe(
      (photograph) => (this.price = photograph?.price)
    );

    //recup items du photograph
    this.medias = this.photographId
      ? this.store.select(mediaByPhotographId(+this.photographId))
      : null;
    this.medias
      ?.pipe(
        map((medias) => {
          return medias.map((media) => media.likes);
        })
      )
      .subscribe((likes) => {
        const totalLikes = likes.reduce((acc, like) => {
          return acc + like;
        }, 0);
        this.likes = totalLikes;
        console.log(this.likes)
      });
    }


    filterPhotos(e : any){
      console.log(e)
    }



}
