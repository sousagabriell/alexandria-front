import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppApiService } from '../services/app-api.service';
import * as AppActions from './app.actions';


@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private appApiService: AppApiService) { }

    loadBookShelf$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.getBookShelf),
            switchMap(() => this.appApiService.getBooksKindle().pipe(
                map((bookShelf: any) => {
                    return AppActions.getBookShelfSuccess({ bookShelf })
                }
                ),
                catchError((error) =>
                    of(AppActions.getBookShelfFailure(error))
                )
            ))
        )
    });

}