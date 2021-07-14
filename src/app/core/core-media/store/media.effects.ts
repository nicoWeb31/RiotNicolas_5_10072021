import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MediaService } from '../service';
import * as mediaActions from './actions';

@Injectable()
export class MediaEffect {
  getMedias$ = createEffect(() => {
    return this.actions.pipe(
      ofType(mediaActions.getMediaStart),
      mergeMap(() => {
        return this.mediaService.getMedia().pipe(
          map((media) => {
            return mediaActions.getMediaSuccess({ media });
          }),
          catchError(({ message }) =>
            of(mediaActions.getMediaError({ message }))
          )
        );
      })
    );
  });

  constructor(private actions: Actions, private mediaService: MediaService) {}
}
