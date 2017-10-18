/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'services/Firebase';
import {
  notificationOpen
} from 'store/departments/actions'
import {
  FIRESTORE_DOCUMENT_ADD_REQUEST,
  FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST,
  FIRESTORE_DOCUMENT_SET_REQUEST,
  FIRESTORE_DOCUMENT_UPDATE_REQUEST,
  FIRESTORE_DOCUMENT_GET_REQUEST,
  FIRESTORE_DOCUMENT_ALL_GET_REQUEST,
  FIRESTORE_DOCUMENT_FILTER_GET_REQUEST,
  FIRESTORE_DOCUMENT_DELETE_REQUEST,
  FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST,
  FIRESTORE_QUERY_REQUEST,
} from './actions'
import {
  firestoreDocumentAddSuccess,
  firestoreDocumentAddFailure,
  firestoreDocumentEmptyAddSuccess,
  firestoreDocumentEmptyAddFailure,
  firestoreDocumentSetSuccess,
  firestoreDocumentSetFailure,
  firestoreDocumentUpdateSuccess,
  firestoreDocumentUpdateFailure,
  firestoreDocumentGetSuccess,
  firestoreDocumentGetFailure,
  firestoreDocumentAllGetSuccess,
  firestoreDocumentAllGetFailure,
  firestoreDocumentFilterGetSuccess,
  firestoreDocumentFilterGetFailure,
  firestoreDocumentDeleteSuccess,
  firestoreDocumentDeleteFailure,
  firestoreDocumentFieldsDeleteSuccess,
  firestoreDocumentFieldsDeleteFailure,
  firestoreQuerySuccess,
  firestoreQueryFailure,
} from './actions'
/*---*--- Document Add ---*---*/
function* documentAdd({payload, metadata}) {
  try {
    const { collection } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentAdd, collection, payload);
    yield put(firestoreDocumentAddSuccess({payload: {documentID}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentAddFailure({payload: e, metadata}))
  }
}

/*---*--- Document Empty Add ---*---*/
function* documentEmptyAdd({metadata}) {
  try {
    const { collection } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentEmptyAdd, collection);
    yield put(firestoreDocumentEmptyAddSuccess({payload: {documentID}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentEmptyAddFailure({payload: e, metadata}))
  }
}

/*---*--- Document Set ---*---*/
function* documentSet({payload, metadata}) {
  try {
    const { collection, document, merge } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentSet, collection, document, payload, merge);
    yield put(firestoreDocumentSetSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentSetFailure({payload: e, metadata}))
  }
}

/*---*--- Document Update ---*---*/
function* documentUpdate({payload, metadata}) {
  try {
    const { collection, document, merge } = metadata
    const documentID = yield call(reduxSagaFirebase.firestore.documentUpdate, collection, document, payload);
    yield put(firestoreDocumentUpdateSuccess({payload: {}, metadata}))
  } catch(e) {
    console.log(e)
    yield put(firestoreDocumentUpdateFailure({payload: e, metadata}))
  }
}


/*---*--- Document Get ---*---*/
function* documentGet({payload, metadata}) {
  try {
    const { collection, document, merge } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentGet, collection, document);
    yield put(firestoreDocumentGetSuccess({payload: data, metadata}))
  } catch(e) {
    yield put(firestoreDocumentGetFailure({payload: e, metadata}))
  }
}


/*---*--- Document All Get ---*---*/
function* documentAllGet({payload, metadata}) {
  try {
    const { collection, document, merge } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentAllGet, collection);
    yield put(firestoreDocumentAllGetSuccess({payload: data, metadata}))
  } catch(e) {
    yield put(firestoreDocumentAllGetFailure({payload: e, metadata}))
  }
}


/*---*--- Document Filter Get ---*---*/
function* documentFilterGet({payload, metadata}) {
  try {
    const { collection, filters } = metadata
    const data = yield call(reduxSagaFirebase.firestore.documentFilterGet, collection, filters);
    yield put(firestoreDocumentFilterGetSuccess({payload: data, metadata}))
  } catch(e) {
    yield put(firestoreDocumentFilterGetFailure({payload: e, metadata}))
  }
}


/*---*--- Document Delete ---*---*/
function* documentDelete({payload, metadata}) {
  try {
    const { collection, document } = metadata
    const deleteRequest = yield call(reduxSagaFirebase.firestore.documentDelete, collection, document);
    yield put(firestoreDocumentDeleteSuccess({payload: {...deleteRequest}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Document Fields Delete ---*---*/
function* documentFieldsDelete({payload, metadata}) {
  try {
    const { collection, document } = metadata
    const deleteFieldsRequest = yield call(reduxSagaFirebase.firestore.documentFieldsDelete, collection, document, payload);
    yield put(firestoreDocumentFieldsDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(firestoreDocumentFieldsDeleteFailure({payload: e, metadata}))
  }
}

/*---*--- Query ---*---*/
function* query({payload, metadata}) {
  try {

    yield put(firestoreQuerySuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(firestoreQueryFailure({payload: e, metadata}))
  }
}


export default function* rxdbRootSaga() {
  yield [
   takeEvery(FIRESTORE_DOCUMENT_ADD_REQUEST, documentAdd),
   takeEvery(FIRESTORE_DOCUMENT_EMPTY_ADD_REQUEST, documentEmptyAdd),
   takeEvery(FIRESTORE_DOCUMENT_SET_REQUEST, documentSet),
   takeEvery(FIRESTORE_DOCUMENT_UPDATE_REQUEST, documentUpdate),
   takeEvery(FIRESTORE_DOCUMENT_GET_REQUEST, documentGet),
   takeEvery(FIRESTORE_DOCUMENT_ALL_GET_REQUEST, documentAllGet),
   takeEvery(FIRESTORE_DOCUMENT_FILTER_GET_REQUEST, documentFilterGet),
   takeEvery(FIRESTORE_DOCUMENT_DELETE_REQUEST, documentDelete),
   takeEvery(FIRESTORE_DOCUMENT_FIELDS_DELETE_REQUEST, documentFieldsDelete),
   takeEvery(FIRESTORE_QUERY_REQUEST, query),
  ];
}