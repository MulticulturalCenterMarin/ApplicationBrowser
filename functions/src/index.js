/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.token);
const twilio = require('twilio');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const shortid = require('shortid'); // https://www.npmjs.com/package/shortid
const moment = require('moment-timezone')
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');
import setupGraphQLServer from './graphql'
import { twilioTextSend } from './twilio'
import { transformUserOnCreate } from './schema/transform'
/*--- Third-Party Integrations ---*/
import todayEpoch from './timewatch/todayEpoch'
import todayMatch from './timewatch/todayMatch'
/* ------------------------ Initialize Dependencies ------------------------- */
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

// Stripe
const currency = functions.config().stripe.currency || 'USD';

// Twilio
const accountSid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken
const twilioClient = new twilio(accountSid, authToken);
/*---*---------------              ---------------*---* 
                         GraphQL 
/*---*---------------              ---------------*---*/
const graphQLServer = setupGraphQLServer()
exports.api = functions.https.onRequest(graphQLServer)


/*---*---------------              ---------------*---* 
                         Data Flow
/*---*---------------              ---------------*---*/


/*---*---------------              ---------------*---* 
                      Authentication 
/*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {
  const person = {
    eid: event.data.uid,
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


/*---*---               ---*---* 
            Twilio
            https://www.twilio.com/docs/api/twiml/client
*---*---               ---*---*/
exports.twilioSmsMonitorOutbound = functions.database.ref('/infrastructure/messages/outbound/request/{messages}')
  .onCreate(event => {
      const dataKey = event.data.key // SMS Request Key | Generated by Firebase
      const smsRequest = event.data.val(); // SMS Request Values | Latest Child from onCreate

      /**
       * @todo We need to add more PERMISSIONS CHECKS for SMS enhanced security.
       * In addition the system should monitor for attempts to abuse SMS services, either by tracking volume or
       * doing multiple verifications and looking for abnormalities in frontend/backend security checks.
       * 
       * We trust cookies and Firebase, but 
       * 
       * Steps for Security
       * 1. The Database rules limits who can write to the infrastructure 
       */
      if (true) {      
        const uid = shortid.generate(); // Universal Identification
        smsRequest.metadata.uid = uid
        smsRequest.metadata.timestamp = new Date()
        /*--- DatabaseWrite | Infrastructure Communication Message Outbound Request ---*/ 
        /**
         * Add a Universal Identifier to the Request
         */
        db.databaseWrite({
          entity: 'infrastructure',
          branch: ['messages', 'outbound', 'request', dataKey],
          payload: {uid},
          config: {
            writeType: 'update'
          }
        })
        
        /**
         * Log the SMS 
         */
        db.databaseWrite({
          entity: 'activity',
          branch: ['sms'],
          payload: {smsRequest},
          config: {
            writeType: 'push'
          }
        })

        const payload = smsRequest.payload
        twilioTextSend(uid, payload)
      }
  });

exports.twilioSyncCalls = functions.https.onRequest((request,response)=> {
  twilioClient.calls
    .each((call) => {
      const t = firestore.collection('calls').add({
        direction: call.direction,
        duration: call.duration,
        forwardedFrom: call.forwardedFrom,
        from: call.from,
        fromFormatted: call.fromFormatted,
        endTime: call.endTime,
        phoneNumberSid: call. phoneNumberSid,
        startTime: call.startTime,
        status: call.status,
        to: call.to,
        toFormatted: call.toFormatted,
        price: call.price,
      })
    });
    response.send('Syncing Calls') 
})

exports.twilioSyncMessages = functions.https.onRequest((request,response)=> {
  twilioClient.messages
    .each((message) => {
      firestore.collection('messages').add({
        body: message.body,
        direction: message.direction,
        errorCode: message.errorCode,
        errorMessage: message.errorMessage,
        from: message.from,
        numMedia: message.numMedia,
        status: message.status,
        sid: message.sid,
        to: message.to,
        price: message.price,
        priceUnit: message.priceUnit,
        uri: message.uri,
      })
    });
})


/*---*---               ---*---* 
            Stripe
            https://github.com/firebase/functions-samples/blob/master/stripe/functions/index.js
*---*---               ---*---*/

// When a user is created, register them with Stripe
exports.createStripeCustomer = functions.auth.user().onCreate(event => {
  const data = event.data;
  const person = {
    eid: event.data.uid,
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

  return stripe.customers.create({
    email: data.email
  }).then(customer => {
    firestore.collection('customers').add({
        eid: event.data.uid,
        stripeId: customer.id
      })
  });
});




exports.stripeChargeRequest = functions.firestore
  .document('commerceTokens/{token}')
  .onCreate(event => {
    const data = event.data.data();

    stripe.charges.create({
      amount: 50,
      currency: "usd",
      source: data.token.id,
      description: "Charge for kames"
    }).then(value=>{
      console.log(value)
    }).catch(e=>{
      console.log(e)
    })
});


// Add a payment source (card) for a user by writing a stripe payment source token to Realtime database
exports.addPaymentSource = functions.database.ref('/stripe_customers/{userId}/sources/{pushId}/token').onWrite(event => {
  const source = event.data.val();
  if (source === null) return null;
  return admin.database().ref(`/stripe_customers/${event.params.userId}/customer_id`).once('value').then(snapshot => {
    return snapshot.val();
  }).then(customer => {
    return stripe.customers.createSource(customer, {source});
  }).then(response => {
      return event.data.adminRef.parent.set(response);
    }, error => {
      return event.data.adminRef.parent.child('error').set(userFacingMessage(error)).then(() => {
        return reportError(error, {user: event.params.userId});
      });
  });
});

// When a user deletes their account, clean up after them
exports.cleanupUser = functions.auth.user().onDelete(event => {
  return admin.database().ref(`/stripe_customers/${event.data.uid}`).once('value').then(snapshot => {
    return snapshot.val();
  }).then(customer => {
    return stripe.customers.del(customer.customer_id);
  }).then(() => {
    return admin.database().ref(`/stripe_customers/${event.data.uid}`).remove();
  });
});
