import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '.';

export const selectAppState = createFeatureSelector<fromApp.BookState>(
    'app'
);

export const selectBookShelf = createSelector(selectAppState, state => state?.bookShelf);