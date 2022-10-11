import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '.';

export const selectAppState = createFeatureSelector<fromApp.BookState>(
    'app'
);

export const selectBookShelfKindle = createSelector(selectAppState, state => state?.bookShelfKindle);
export const selectBookShelfFisic = createSelector(selectAppState, state => state?.bookShelfFisic);
export const selectBookShelfPdf = createSelector(selectAppState, state => state?.bookShelfPdf);
export const selectBookShelfTeses = createSelector(selectAppState, state => state?.bookShelfTeses);