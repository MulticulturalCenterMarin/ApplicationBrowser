'use strict';var _graphql=require('./graphql'),_graphql2=_interopRequireDefault(_graphql),_twilio=require('./twilio'),_transform=require('./schema/transform'),_todayEpoch=require('./timewatch/todayEpoch'),_todayEpoch2=_interopRequireDefault(_todayEpoch),_todayMatch=require('./timewatch/todayMatch'),_todayMatch2=_interopRequireDefault(_todayMatch);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _=require('lodash'),functions=require('firebase-functions'),admin=require('firebase-admin'),stripe=require('stripe')(functions.config().stripe.token),twilio=require('twilio'),VoiceResponse=require('twilio').twiml.VoiceResponse,shortid=require('shortid'),moment=require('moment-timezone'),db=require('./database');admin.initializeApp(functions.config().firebase);var firestore=admin.firestore(),currency=functions.config().stripe.currency||'USD',accountSid=functions.config().twilio.accountsid,authToken=functions.config().twilio.authtoken,twilioClient=new twilio(accountSid,authToken),graphQLServer=(0,_graphql2.default)();exports.api=functions.https.onRequest(graphQLServer),exports.dataFlow=functions.firestore.document('customers/{customer}').onCreate(function(a){console.log(a),console.log(a.data),console.log(a.params),console.log(a.params.userId)}),exports.dataFlows=functions.firestore.document('articles/{article}').onCreate(function(a){console.log(a),console.log(a.params),console.log(a.params.userId)}),exports.authenticationComplete=functions.auth.user().onCreate(function(a){var b={eid:a.data.uid,images:{imageProfile:a.data.photoURL},name:{nameDisplay:a.data.displayName,nameFirst:a.data.displayName},contact:{contactEmail:a.data.email},provider:a.data.providerData};firestore.collection('people').add(b)}),exports.authenticationUserOnCreate=functions.database.ref('/users/{user}').onCreate(function(a){var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'users',branches:[b],payload:{pointer:b}})}),exports.mutateRequest=functions.database.ref('/mutate/request/{request}').onCreate(function(a){var b=a.data.key,c=a.data.val();if(c.metadata.entity)switch(c.metadata.entity){case'volunteerHotline':if(c.metadata.hotlineDepartment){db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branch:['hotline',c.metadata.hotlineDepartment,'storage'],payload:_.omit(c.payload,'userRequesting')});var d=(0,_todayMatch2.default)(c.payload.days);if(d.length){var e=(0,_todayEpoch2.default)('America/Los_Angeles');if(c.payload.time.dateEnd>=e.dayendEpoch){db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branch:['hotline','immigration','today'],payload:c.payload});var f=moment(new Date,'America/Los_Angeles').get('hour');if(c.payload.time.hourStart<=f){var h=admin.database().ref('/volunteer/hotline/immigration/active');h.once('value').then(function(i){i.val();db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branch:['hotline','immigration','active'],payload:c.payload})})}}}}}}),exports.twilioVoice=functions.https.onRequest(function(a,b){var c=new VoiceResponse,d=c.dial(),e=admin.database().ref('/volunteer/hotline/immigration/active');e.once('value').then(function(f){var g=f.val();_.forEach(g,function(h){d.number('1'+h.contact.contactPhone)}),b.send(c.toString())})}),exports.twilioSmsMonitorOutbound=functions.database.ref('/infrastructure/messages/outbound/request/{messages}').onCreate(function(a){var b=a.data.key,c=a.data.val();{var d=shortid.generate();c.metadata.uid=d,c.metadata.timestamp=new Date,db.databaseWrite({entity:'infrastructure',branch:['messages','outbound','request',b],payload:{uid:d},config:{writeType:'update'}}),db.databaseWrite({entity:'activity',branch:['sms'],payload:{smsRequest:c},config:{writeType:'push'}});var e=c.payload;(0,_twilio.twilioTextSend)(d,e)}}),exports.twilioSyncCalls=functions.https.onRequest(function(a,b){twilioClient.calls.each(function(c){firestore.collection('calls').add({direction:c.direction,duration:c.duration,forwardedFrom:c.forwardedFrom,from:c.from,fromFormatted:c.fromFormatted,endTime:c.endTime,phoneNumberSid:c.phoneNumberSid,startTime:c.startTime,status:c.status,to:c.to,toFormatted:c.toFormatted,price:c.price})}),b.send('Syncing Calls')}),exports.twilioSyncMessages=functions.https.onRequest(function(){twilioClient.messages.each(function(c){firestore.collection('messages').add({body:c.body,direction:c.direction,errorCode:c.errorCode,errorMessage:c.errorMessage,from:c.from,numMedia:c.numMedia,status:c.status,sid:c.sid,to:c.to,price:c.price,priceUnit:c.priceUnit,uri:c.uri})})}),exports.createStripeCustomer=functions.auth.user().onCreate(function(a){var b=a.data;return stripe.customers.create({email:b.email}).then(function(c){firestore.collection('customers').add({eid:c.id})})}),exports.addPaymentSource=functions.database.ref('/stripe_customers/{userId}/sources/{pushId}/token').onWrite(function(a){var b=a.data.val();return null===b?null:admin.database().ref('/stripe_customers/'+a.params.userId+'/customer_id').once('value').then(function(c){return c.val()}).then(function(c){return stripe.customers.createSource(c,{source:b})}).then(function(c){return a.data.adminRef.parent.set(c)},function(c){return a.data.adminRef.parent.child('error').set(userFacingMessage(c)).then(function(){return reportError(c,{user:a.params.userId})})})}),exports.cleanupUser=functions.auth.user().onDelete(function(a){return admin.database().ref('/stripe_customers/'+a.data.uid).once('value').then(function(b){return b.val()}).then(function(b){return stripe.customers.del(b.customer_id)}).then(function(){return admin.database().ref('/stripe_customers/'+a.data.uid).remove()})});
//# sourceMappingURL=index.js.map