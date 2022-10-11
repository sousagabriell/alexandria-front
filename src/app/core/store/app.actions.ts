import { createAction, props } from "@ngrx/store";

export const getBookShelfKindle = createAction('[App] Get Book Shelf Kindle');

export const getBookShelfKindleSuccess = createAction(
    '[App] Get Book Shelf Kindle Success',
    props<{ bookShelfKindle: any }>()
);

export const getBookShelfKindleFailure = createAction(
    '[App] Get Book Shelf Kindle Failure',
    props<{ error: any }>()
);

export const getBookShelfFisic = createAction('[App] Get Book Shelf Fisic');

export const getBookShelfFisicSuccess = createAction(
    '[App] Get Book Shelf Fisic Success',
    props<{ bookShelfFisic: any }>()
);

export const getBookShelfFisicFailure = createAction(
    '[App] Get Book Shelf Fisic Failure',
    props<{ error: any }>()
);

export const getBookShelfPdf = createAction('[App] Get Book Shelf Pdf');

export const getBookShelfPdfSuccess = createAction(
    '[App] Get Book Shelf Pdf Success',
    props<{ bookShelfPdf: any }>()
);

export const getBookShelfPdfFailure = createAction(
    '[App] Get Book Shelf Pdf Failure',
    props<{ error: any }>()
);

export const getBookShelfTeses = createAction('[App] Get Book Shelf Teses');

export const getBookShelfTesesSuccess = createAction(
    '[App] Get Book Shelf Teses Success',
    props<{ bookShelfTeses: any }>()
);

export const getBookShelfTesesFailure = createAction(
    '[App] Get Book Shelf Teses Failure',
    props<{ error: any }>()
);

export const generalError = createAction(
    '[App] general error',
    props<{ data: any }>()
);