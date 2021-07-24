import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Media } from 'src/app/core';
import { addLikeMedia } from 'src/app/core/core-media/store';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-card-media',
  templateUrl: './card-media.component.html',
  styleUrls: ['./card-media.component.scss'],
})
export class CardMediaComponent implements OnInit {
  @Input() media!: Media;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addLike(id: number): void {
    this.store.dispatch(addLikeMedia({ id }));
  }
}
