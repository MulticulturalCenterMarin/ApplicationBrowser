import { takeEvery, all } from 'redux-saga/effects';

import apollo from './apollo/sagas'
import authentication from './authentication/sagas'
import database from './database/sagas'
import entity from './entity/sagas'
import firestore from './firestore/sagas'
import mapbox from './mapbox/sagas'
import mining from './mining/sagas'
import notifications from './notifications/sagas'
import storage from './storage/sagas'
import stripe from './stripe/sagas'
import rxdb from './rxdb/sagas'

export default function* rootSaga() {
  yield all([
    authentication(),
    apollo(),
    database(),
    entity(),
    firestore(),
    mapbox(),
    mining(),
    notifications(),
    storage(),
    stripe(),
    rxdb(),
  ]);
}