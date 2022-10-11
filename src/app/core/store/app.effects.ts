import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppApiService } from '../services/app-api.service';
import * as AppActions from './app.actions';


@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private appApiService: AppApiService) { }

    loadBookShelfKindle$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.getBookShelfKindle),
            switchMap(() => this.appApiService.getBooksKindle().pipe(
                map((bookShelfKindle: any) => {
                    return AppActions.getBookShelfKindleSuccess({ bookShelfKindle })
                }
                ),
                catchError((error) =>
                    of(AppActions.getBookShelfKindleFailure(error))
                )
            ))
        )
    });

    loadBookShelfFisic$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.getBookShelfFisic),
            switchMap(() => this.appApiService.getBooksFisics().pipe(
                map((bookShelfFisic: any) => {
                    return AppActions.getBookShelfFisicSuccess({ bookShelfFisic })
                }
                ),
                catchError((error) =>
                    of(AppActions.getBookShelfFisicFailure(error))
                )
            ))
        )
    });

    loadBookShelfPdf$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.getBookShelfPdf),
            switchMap(() => this.appApiService.getPdf().pipe(
                map((bookShelfPdf: any) => {
                    return AppActions.getBookShelfPdfSuccess({ bookShelfPdf })
                }
                ),
                catchError((error) =>
                    of(AppActions.getBookShelfPdfFailure(error))
                )
            ))
        )
    });

    loadBookShelfTeses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.getBookShelfTeses),
            switchMap(() => this.appApiService.getTeses().pipe(
                map((bookShelfTeses: any) => {
                    return AppActions.getBookShelfTesesSuccess({ bookShelfTeses })
                }
                ),
                catchError((error) =>
                    of(AppActions.getBookShelfTesesFailure(error))
                )
            ))
        )
    });

}