/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
/*--- Third-Party Integrations ---*/
const twilio = require('twilio');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
import schemaUser from './schema/user'
import setupGraphQLServer from './graphql'
import { twilioTextSend } from './twilio'
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
  const payload = transformUserOnCreate(event.data);
  if(true) {
    db.databaseWrite({
      config: {writeType: 'push'},
      entity: 'users',
      branches: [],
      payload: _.merge({},schemaUser, payload),
    })
  } /*end if*/

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

exports.twilioVoice = functions.https.onRequest((request,response)=> {
  const voiceResponse = new VoiceResponse();
  const dial = voiceResponse.dial();
  const activeReferenceHotline = admin.database().ref('/volunteer/hotline/immigration/active')
  activeReferenceHotline.on('value').then(activeVolunteers => {
    _.forEach(activeVolunteers, volunteer=>{
      dial.number(volunteer.contact.contactPhone)
    })
  })
  response.send(voiceResponse.toString())
})
