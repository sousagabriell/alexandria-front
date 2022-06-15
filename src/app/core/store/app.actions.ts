import { createAction, props } from "@ngrx/store";

export const getBookShelf = createAction('[App] Get Book Shelf');

export const getBookShelfSuccess = createAction(
    '[App] Get Book Shelf Success',
    props<{ bookShelf: any }>()
);

export const getBookShelfFailure = createAction(
    '[App] Get Book Shelf Failure',
    props<{ error: any }>()
);

export const generalError = createAction(
    '[App] general error',
    props<{ data: any }>()
);