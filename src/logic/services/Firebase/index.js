/* ------------------------- External Dependencies -------------------------- */
import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
/* ------------------------- Internal Dependencies -------------------------- */
import { FIREBASE_CONFIG } from 'settings/Firebase';
require("firebase/firestore");
/* ------------------------ Initialize Dependencies ------------------------- */
export const fireApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = fireApp.auth();
export const firebaseDatabase = fireApp.database();
export const firebaseStorage = fireApp.storage();

firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      var db = firebase.firestore();
      console.log('persisted')
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
  

/* Redux Saga */
const firebaseAppRedux = new ReduxSagaFirebase(fireApp)
export default firebaseAppRedux

