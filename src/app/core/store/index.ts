import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';
import * as AppActions from './app.actions'
import { clearState } from './clear-state';


export interface BookState {
    bookShelfKindle: Book[];
    bookShelfFisic: Book[];
    bookShelfPdf: Book[];
    bookShelfTeses: Book[];
    generalError: any;
}


export const InitialBookState: BookState = {
    bookShelfKindle: [],
    bookShelfFisic: [],
    bookShelfPdf: [],
    bookShelfTeses: [],
    generalError: null
}

const appReducer = createReducer(
    InitialBookState,
    on(AppActions.getBookShelfKindle, (state) => {
        return { ...state, ...{} };
    }),
    on(AppActions.getBookShelfKindleSuccess, (state, action) => {
        return { ...state, ...{ bookShelfKindle: action.bookShelfKindle } };
    }),
    on(AppActions.getBookShelfKindleFailure, (state, action) => {
        return { ...state, ...{ generalError: action.error } };
    }),
    on(AppActions.getBookShelfFisic, (state) => {
        return { ...state, ...{} };
    }),
    on(AppActions.getBookShelfFisicSuccess, (state, action) => {
        return { ...state, ...{ bookShelfFisic: action.bookShelfFisic } };
    }),
    on(AppActions.getBookShelfFisicFailure, (state, action) => {
        return { ...state, ...{ generalError: action.error } };
    }),
    on(AppActions.getBookShelfPdf, (state) => {
        return { ...state, ...{} };
    }),
    on(AppActions.getBookShelfPdfSuccess, (state, action) => {
        return { ...state, ...{ bookShelfPdf: action.bookShelfPdf } };
    }),
    on(AppActions.getBookShelfPdfFailure, (state, action) => {
        return { ...state, ...{ generalError: action.error } };
    }),
    on(AppActions.getBookShelfTeses, (state) => {
        return { ...state, ...{} };
    }),
    on(AppActions.getBookShelfTesesSuccess, (state, action) => {
        return { ...state, ...{ bookShelfTeses: action.bookShelfTeses } };
    }),
    on(AppActions.getBookShelfTesesFailure, (state, action) => {
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