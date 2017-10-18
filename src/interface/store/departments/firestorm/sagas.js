/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { call, put, fork, takeEvery, take } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import reduxSagaFirebase from 'services/Firebase';
/*--- Redux ---*/ 
import {
  FIRESTORM_ENTITY_SYNC_REQUEST,
  FIRESTORM_ENTITY_READ_REQUEST,
  FIRESTORM_ENTITY_CREATE_REQUEST,
  FIRESTORM_ENTITY_UPDATE_REQUEST,
} from './actions'
import {
  firestormEntitySyncSuccess,
  firestormEntitySyncFailure,
  firestormEntityReadSuccess,
  firestormEntityReadFailure,
  firestormEntityCreateSuccess,
  firestormEntityCreateFailure,
  firestormEntityUpdateSuccess,
  firestormEntityUpdateFailure,
} from './actions'

import {
  notificationOpen,
  databaseWriteRequest,
  rxdbCollectionNewDocumentRequest,
} from 'store/departments/actions'


/* ------------------------- Entity Sync -------------------------- */
function* entitySync({payload, metadata}) {
  try {
    /*--- Setup ---*/
    let { entity, branch } = metadata 
    if(!entity) new Error('Firestorm EntityRead[firebaseEntityReadRequest()] requires a valid Entity type.') // TODO:: Automated Entity checking with Schema

    yield call(syncFirebaseToRxDBClearStorage, metadata) // Transfer data from Firebase database to to RxDB databsase

    /*--- Initialization ---*/
    const payloadNew = {},metadataNew = {};
    const path = `${entity}${ branch?"/"+branch.join("/") : '' }`

    /*--- Execution ---*/
    const data = yield call(reduxSagaFirebase.database.read, path); // Read the "entity" branch from Firebase Database
    const payloadFromFirebase = {
      ...data
    }
    yield call(syncFirebaseToRxDB, data, metadata) // Transfer data from Firebase database to to RxDB databsase

    /*--- Status ---*/
    yield put(firestormEntityReadSuccess({payload: payloadNew, metadata: metadataNew}))
    yield put(notificationOpen({payload:{title: 'Success: Local Database Sync.', message:`The cloud database was succesfully synced.`}}))
  } catch(e) {
    /*--- Reporting ---*/

    /*--- Status ---*/
    yield put(firestormEntityReadFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Failure: Local Database Sync.', message:'Please check Internet connection and try again.'}}))
  }
}


async function syncFirebaseToRxDB(payload, metadata) {
  const {
    database,
    collection
  } = metadata
  
  // const people = await call(reduxSagaFirebase.database.read, 'community/people'); // Read the "entity" branch from Firebase Database
  await _.forEach(payload, entity=> {
    let td = window.singleton.db[database][collection].newDocument()
    td.data = {...entity}
    td.save()
  })

}

async function syncFirebaseToRxDBClearStorage(metadata) {
  const {database, collection} = metadata
  await window.singleton.db[database][collection].find()
  .exec().then(documents => {
    documents.map(document=> document.remove())
  });
}




/* ------------------------- Entity Create -------------------------- */
function* entityCreate({payload, metadata}) {
  try {

    yield put(databaseWriteRequest({payload, metadata}))
    yield put(rxdbCollectionNewDocumentRequest({payload, metadata}))

    const payloadNew = {}
    const metadataNew = {}
    yield put(firestormEntityCreateSuccess({payload: payloadNew, metadata: metadataNew}))
  } catch(e) {
    yield put(firestormEntityCreateFailure({payload: e, metadata}))
  }
}
async function entityCreateAsync(payload, metadata) {
  const { database, collection } = metadata
  return await window.singleton.db[database][collection].create({...payload})
}



/*---*--- Entity Read ---*---*/
function* entityRead({payload, metadata}) {
  try {

    /*--- Setup ---*/
    let { entity, branch } = metadata 
    if(!entity) new Error('Firestorm EntityRead[firebaseEntityReadRequest()] requires a valid Entity type.') // TODO:: Automated Entity checking with Schema

    /*--- Initialization ---*/
    const payloadNew = {},metadataNew = {};
    const path = `${entity}${ branch?"/"+branch.join("/") : '' }`

    /*--- Execution ---*/
    const data = yield call(reduxSagaFirebase.database.read, 'community/people'); // Read the "entity" branch from Firebase Database
    yield call(syncFirebaseToRxDB, data, metadata) // Transfer data from Firebase database to to RxDB databsase

    /*--- Status ---*/
    yield put(firestormEntityReadSuccess({payload: payloadNew, metadata: metadataNew}))
    yield put(notificationOpen({payload:{title: 'Success: Local Database Sync.', message:`The cloud database was succesfully synced.`}}))
  } catch(e) {
    /*--- Reporting ---*/

    /*--- Status ---*/
    yield put(firestormEntityReadFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Failure: Local Database Sync.', message:'Please check Internet connection and try again.'}}))
  }
}



/*---*--- Entity Update ---*---*/
function* entityUpdate({payload, metadata}) {
  try {

    const payloadNew = {}
    const metadataNew = {}
    yield put(firestormEntityUpdateSuccess({payload: payloadNew, metadata: metadataNew}))
  } catch(e) {
    yield put(firestormEntityUpdateFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(FIRESTORM_ENTITY_SYNC_REQUEST, entitySync),
   takeEvery(FIRESTORM_ENTITY_READ_REQUEST, entityRead),
   takeEvery(FIRESTORM_ENTITY_CREATE_REQUEST, entityCreate),
   takeEvery(FIRESTORM_ENTITY_UPDATE_REQUEST, entityUpdate),
  ];
}

