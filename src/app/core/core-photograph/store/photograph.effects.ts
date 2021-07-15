import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PhotographService } from '../service';

import * as photographActions from './actions';

@Injectable()
export class PhotographEffect {
  getPhotograph$ = createEffect(() => {
    return this.actions.pipe(
      ofType(photographActions.getPhotographStart),
      mergeMap(() => {
        return this.photographService.getPhotograph().pipe(
          map((photographs) => {
            return photographActions.getPhotographSuccess({ photographs });
          }),
          catchError(({ message }) =>
            of(photographActions.getPhotographError({ message }))
          )
        );
      })
    );
  });

  constructor(
    private actions: Actions,
    private photographService: PhotographService
  ) {}
}
