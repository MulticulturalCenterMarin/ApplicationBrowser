/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
import setupGraphQLServer from './graphql'
import { transformUserOnCreate } from './schema/transform'

/* ------------------------ Initialize Dependencies ------------------------- */
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();
/*---*---------------              ---------------*---* 
                         GraphQL 
/*---*---------------              ---------------*---*/
const graphQLServer = setupGraphQLServer()
exports.api = functions.https.onRequest(graphQLServer)

/*---*---------------              ---------------*---* 
                      Authentication 
/*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {
  const person = {
    uid: event.data.uid,
    images: {
      imageProfile: event.data.photoURL
    },
    name: {
      nameDisplay: event.data.displayName,
      nameFirst: event.data.displayName,
    },
    contact: {
      contactEmail: event.data.email,
    },
    provider: event.data.providerData,
  }
  firestore.collection('people').add(person)
});

exports.authenticationUserOnCreate = functions.database.ref('/users/{user}')
  .onCreate(event => {
    const pointer = event.data.key 

    
    db.databaseWrite({
      config: {writeType: 'update'},
      entity: 'users',
      branches: [pointer],
      payload: {pointer},
    })
  })

/*---*---------------              ---------------*---* 
                         Mutate
/*---*---------------              ---------------*---*/
exports.mutateRequest = functions.database.ref('/mutate/request/{request}')

  /*--- Monitor User Create | Insert additional User data.   (DB Middleware?)   ---*/
  .onCreate(event => {
    const eventKey = event.data.key 
    const data = event.data.val()

    /* Entity | Target the requested entity to mutate */
    if(data.metadata.entity) {
      switch(data.metadata.entity) {

      }
    }
  })

/* -------------------------------------------------------------------------- */
/* ------------------------- External API Services -------------------------- */
/* -------------------------------------------------------------------------- */

/*---*---               ---*---* 
            Twilio
            https://www.twilio.com/docs/api/twiml/client
*---*---               ---*---*/
