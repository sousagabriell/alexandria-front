import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';
import * as AppActions from './app.actions'
import { clearState } from './clear-state';


export interface BookState {
    bookShelf: Book[];
    generalError: any;
}


export const InitialBookState: BookState = {
    bookShelf: [],
    generalError: null
}

const appReducer = createReducer(
    InitialBookState,
    on(AppActions.getBookShelf, (state) => {
        return { ...state, ...{} };
    }),
    on(AppActions.getBookShelfSuccess, (state, action) => {
        return { ...state, ...{ bookShelf: action.bookShelf } };
    }),
    on(AppActions.getBookShelfFailure, (state, action) => {
        return { ...state, ...{ generalError: action.error } };
    }),
    on(AppActions.generalError, (state, {data}) => {
        return { ...state, ...{ error: data } };
    }),
);

export const reducers: ActionReducerMap<any> = {
    app: appReducer
}

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [clearState]
    : [clearState]