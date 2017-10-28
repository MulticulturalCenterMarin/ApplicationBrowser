/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe');
const twilio = require('twilio');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
import setupGraphQLServer from './graphql'
import { transformUserOnCreate } from './schema/transform'
/*--- Third-Party Integrations ---*/
import todayEpoch from './timewatch/todayEpoch'
import todayMatch from './timewatch/todayMatch'
/* ------------------------ Initialize Dependencies ------------------------- */
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();
const accountSid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken
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

        /* Volunter Hotline */
        case('volunteerHotline'):
          // TODO Add additional verification, besides just existing. It needs to match an enabled hotline.
          if(data.metadata.hotlineDepartment)
          {
            db.databaseWrite({
              config: {writeType: 'push'},
              entity: 'volunteer',
              branch: ['hotline', data.metadata.hotlineDepartment, 'storage'],
              payload: _.omit(data.payload, 'userRequesting'),
            })
            const match = todayMatch(data.payload.days)
            if (match.length){
              const epochToday = todayEpoch("America/Los_Angeles")
              if (data.payload.time.dateEnd >= epochToday.dayendEpoch)
              {
                db.databaseWrite({
                  config: {writeType: 'push'},
                  entity: 'volunteer',
                  branch: ['hotline', 'immigration', 'today'],
                  payload: data.payload,
                })

                let currentHour = moment(new Date(),"America/Los_Angeles").get('hour'); const nextHour = currentHour + 1
                if (data.payload.time.hourStart <= currentHour)
                {
                  const activeReferenceHotline = admin.database().ref('/volunteer/hotline/immigration/active')
                  activeReferenceHotline.once('value').then(value => {
                    let newValue = value.val()
                    db.databaseWrite({
                      config: {writeType: 'push'},
                      entity: 'volunteer',
                      branch: ['hotline', 'immigration', 'active'],
                      payload: data.payload,
                    })
                  })
                }
              } 
            }
          }
          break;
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
  activeReferenceHotline.once('value').then(activeVolunteers => {
    const data = activeVolunteers.val()
    _.forEach(data, volunteer=>{
      dial.number(`1${volunteer.contact.contactPhone}`)
    })
  response.send(voiceResponse.toString())
  })
})

exports.hidden = functions.https.onRequest((request,response)=> {
  const twilioClient = new twilio(accountSid, authToken);
  twilioClient.calls
    .each((call) => {
      console.log(call)
      const t = firestore.collection('callRecords').add({
        direction: call.direction,
        duration: call.duration,
        forwardedFrom: call.forwardedFrom,
        from: call.from,
        fromFormatted: call.fromFormatted,
        endTime: call.endTime,
        startTime: call.startTime,
        price: call.price,
      })
      console.log(t)
    });

  
})