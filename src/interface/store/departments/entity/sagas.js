/* ------------------------- External Dependencies -------------------------- */
import idx from 'idx'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import reduxSagaFirebase from 'services/Firebase';
import geo from 'mapbox-geocoding'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Entity Actions ---*/
import {
  ENTITY_PERSON_ADD_REQUEST,
  ENTITY_PERSON_EDIT_REQUEST,
  ENTITY_PERSON_DELETE_REQUEST,
  ENTITY_ORGANIZATION_ADD_REQUEST,
  ENTITY_ORGANIZATION_EDIT_REQUEST,
  ENTITY_ORGANIZATION_DELETE_REQUEST,
  ENTITY_PROJECT_ADD_REQUEST,
  ENTITY_PROJECT_EDIT_REQUEST,
  ENTITY_PROJECT_DELETE_REQUEST,
  ENTITY_TASK_ADD_REQUEST,
  ENTITY_TASK_EDIT_REQUEST,
  ENTITY_TASK_DELETE_REQUEST,
  ENTITY_RESOURCE_ADD_REQUEST,
  ENTITY_RESOURCE_EDIT_REQUEST,
  ENTITY_RESOURCE_DELETE_REQUEST,
  ENTITY_BANNER_ADD_REQUEST,
} from './actions'
import {
  entityPersonAddSuccess,
  entityPersonAddFailure,
  entityPersonEditSuccess,
  entityPersonEditFailure,
  entityPersonDeleteSuccess,
  entityPersonDeleteFailure,
  entityOrganizationAddSuccess,
  entityOrganizationAddFailure,
  entityOrganizationEditSuccess,
  entityOrganizationEditFailure,
  entityOrganizationDeleteSuccess,
  entityOrganizationDeleteFailure,
  entityProjectAddSuccess,
  entityProjectAddFailure,
  entityProjectEditSuccess,
  entityProjectEditFailure,
  entityProjectDeleteSuccess,
  entityProjectDeleteFailure,
  entityTaskAddSuccess,
  entityTaskAddFailure,
  entityTaskEditSuccess,
  entityTaskEditFailure,
  entityTaskDeleteSuccess,
  entityTaskDeleteFailure,
  entityResourceAddSuccess,
  entityResourceAddFailure,
  entityResourceEditSuccess,
  entityResourceEditFailure,
  entityResourceDeleteSuccess,
  entityResourceDeleteFailure,
  entityBannerAddSuccess,
  entityBannerAddFailure,
} from './actions'



/*--- Department Actions ---*/
import {
  firestormEntityCreateRequest,
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentUpdateRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
  firestoreDocumentDeleteRequest,
  firestoreDocumentFieldsDeleteRequest,
} from 'store/departments/actions'

import {
  notificationOpen
} from 'store/departments/actions'

import { mapboxGeocode } from 'store/async'

/*--- Firebase | Require Last ---*/
import firebase from 'firebase';
require("firebase/firestore");

/*---*--- Person Add ---*---*/
function* personAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata }))
    yield put(entityPersonAddSuccess({payload: {}, metadata}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(notificationOpen({payload:{title: 'Person Add Success'}}))
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Person Add Failure'}}))
    yield put(entityPersonAddFailure({payload: e, metadata}))
  }
}


/*---*--- Person Edit ---*---*/
function* personEdit({payload, metadata}) {
  try {


    yield put(entityPersonEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityPersonEditFailure({payload: e, metadata}))
  }
}


/*---*--- Person Delete ---*---*/
function* personDelete({payload, metadata}) {
  try {

    yield put(entityPersonDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityPersonDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Organization Add ---*---*/
function* organizationAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata }))
    yield put(entityOrganizationAddSuccess({payload: {}, metadata}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(notificationOpen({payload:{title: 'Organization Add Success'}}))
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Organization Add Failure'}}))
    yield put(entityOrganizationAddFailure({payload: e, metadata}))
  }
}

/*---*--- Organization Delete ---*---*/
function* organizationDelete({payload, metadata}) {
  try {

    yield put(entityOrganizationDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityOrganizationDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Organization Edit ---*---*/
function* organizationEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityOrganizationEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Organization Edit Success'}}))
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Organization Edit Failure'}}))
    yield put(entityOrganizationEditFailure({payload: e, metadata}))
  }
}
/*---*--- Project Add ---*---*/
function* projectAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata}))
    yield put(entityProjectAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Project Add Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Project Add Failure'}}))
    yield put(entityProjectAddFailure({payload: e, metadata}))
  }
}


/*---*--- Project Edit ---*---*/
function* projectEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityProjectEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Project Edit Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Project Edit Failure'}}))
    yield put(entityProjectEditFailure({payload: e, metadata}))
  }
}


/*---*--- Project Delete ---*---*/
function* projectDelete({payload, metadata}) {
  try {

    yield put(entityProjectDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityProjectDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Task Add ---*---*/
function* taskAdd({payload, metadata}) {
  try {

    yield put(entityTaskAddSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskAddFailure({payload: e, metadata}))
  }
}


/*---*--- Task Edit ---*---*/
function* taskEdit({payload, metadata}) {
  try {

    yield put(entityTaskEditSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskEditFailure({payload: e, metadata}))
  }
}


/*---*--- Task Delete ---*---*/
function* taskDelete({payload, metadata}) {
  try {

    yield put(entityTaskDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityTaskDeleteFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Add ---*---*/
function* resourceAdd({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentAddRequest({payload, metadata}))
    yield put(entityResourceAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Resource Add Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentFilterGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Resource Add Failure'}}))
    yield put(entityResourceAddFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Edit ---*---*/
function* resourceEdit({payload, metadata}) {
  try {
    if(payload.address) {
      const {addressStreet, addressCity, addressState} = payload.address
      const address = `${addressStreet} ${addressCity}, ${addressState}`
      const geocode = yield call(mapboxGeocode, address);
      const geopoint = idx(geocode, _=>_.features[0].center)
      payload.address.geopoint = new firebase.firestore.GeoPoint(geopoint[1], geopoint[0])
    }
    yield put(firestoreDocumentUpdateRequest({payload, metadata }))
    yield put(entityResourceEditSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Resource Edit Success'}}))
    if(metadata.trigger) {
      const trigger = {
        ...metadata,
        delta: metadata.trigger
      }
      yield put(firestoreDocumentGetRequest({payload:{}, metadata:trigger}))
    }
  } catch(e) {
    yield put(notificationOpen({payload:{title: 'Resource Edit Failure'}}))
    yield put(entityResourceEditFailure({payload: e, metadata}))
  }
}


/*---*--- Resource Delete ---*---*/
function* resourceDelete({payload, metadata}) {
  try {

    yield put(entityResourceDeleteSuccess({payload: {}, metadata}))
  } catch(e) {
    yield put(entityResourceDeleteFailure({payload: e, metadata}))
  }
}

/*---*--- Banner Add ---*---*/
function* bannerAdd({payload, metadata}) {
  try {
    console.log(payload)
    console.log(metadata)
    const file = payload[0],
    { location, fileMetadata } = metadata
    const fileID = yield call(reduxSagaFirebase.storage.uploadFile, `${location}/${file.name}`, file);
    console.log(fileID)
    const images = {
      imageBanner: fileID.downloadURL
    }
    yield put(firestoreDocumentUpdateRequest({payload: {images}, metadata }))
    yield put(entityBannerAddSuccess({payload: {}, metadata}))
    yield put(notificationOpen({payload:{title: 'Banner Upload Success'}}))
  } catch(e) {
    yield put(entityBannerAddFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Banner Upload Failure'}}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(ENTITY_PERSON_ADD_REQUEST, personAdd),
   takeEvery(ENTITY_PERSON_EDIT_REQUEST, personEdit),
   takeEvery(ENTITY_PERSON_DELETE_REQUEST, personDelete),
   takeEvery(ENTITY_ORGANIZATION_ADD_REQUEST, organizationAdd),
   takeEvery(ENTITY_ORGANIZATION_EDIT_REQUEST, organizationEdit),
   takeEvery(ENTITY_ORGANIZATION_DELETE_REQUEST, organizationDelete),
   takeEvery(ENTITY_PROJECT_ADD_REQUEST, projectAdd),
   takeEvery(ENTITY_PROJECT_EDIT_REQUEST, projectEdit),
   takeEvery(ENTITY_PROJECT_DELETE_REQUEST, projectDelete),
   takeEvery(ENTITY_TASK_ADD_REQUEST, taskAdd),
   takeEvery(ENTITY_TASK_EDIT_REQUEST, taskEdit),
   takeEvery(ENTITY_TASK_DELETE_REQUEST, taskDelete),
   takeEvery(ENTITY_RESOURCE_ADD_REQUEST, resourceAdd),
   takeEvery(ENTITY_RESOURCE_EDIT_REQUEST, resourceEdit),
   takeEvery(ENTITY_RESOURCE_DELETE_REQUEST, resourceDelete),
   takeEvery(ENTITY_BANNER_ADD_REQUEST, bannerAdd),
  ];
}