'use strict';var _user=require('./schema/user'),_user2=_interopRequireDefault(_user),_graphql=require('./graphql'),_graphql2=_interopRequireDefault(_graphql),_twilio=require('./twilio'),_transform=require('./schema/transform'),_todayEpoch=require('./timewatch/todayEpoch'),_todayEpoch2=_interopRequireDefault(_todayEpoch),_todayMatch=require('./timewatch/todayMatch'),_todayMatch2=_interopRequireDefault(_todayMatch);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var _=require('lodash'),functions=require('firebase-functions'),admin=require('firebase-admin'),stripe=require('stripe'),twilio=require('twilio'),VoiceResponse=require('twilio').twiml.VoiceResponse,shortid=require('shortid'),moment=require('moment-timezone'),db=require('./database');admin.initializeApp(functions.config().firebase);var firestore=admin.firestore(),graphQLServer=(0,_graphql2.default)();exports.api=functions.https.onRequest(graphQLServer),exports.hourlyJobs=functions.pubsub.topic('hourly-tick').onPublish(function(){console.log('Hourly Tick Initialize');var b=new Date,c=b.getHours(),d=c++;functions.database.ref('/volunteer/hotline/immigration/today').orderByChild('hourStart').startAt(c).endAt(d).on('child_added',function(e){console.log(e);var f=e.val();db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branches:['hotline','immigration','active'],payload:{activeHotlineVolunteer:f}})})}),exports.dailyJobs=functions.pubsub.topic('daily-tick').onPublish(function(){console.log('Daily Tick Initialize');var b=(0,_todayEpoch2.default)('America/Los_Angeles');functions.database.ref('/volunteer/hotline/immigration/storage').orderByChild('hourStart').startAt(b.midnightEpoch).endAt(b.dayendEpoch).on('child_added',function(c){console.log(c);var d=c.val();db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branches:['hotline','immigration','today'],payload:{todayBatchHotlineVolunteer:d}})})}),exports.authenticationComplete=functions.auth.user().onCreate(function(a){var b=(0,_transform.transformUserOnCreate)(a.data),c=firestore.collection('people').doc('testing').set(a.data);db.databaseWrite({config:{writeType:'push'},entity:'users',branches:[],payload:_.merge({},_user2.default,b)})}),exports.authenticationUserOnCreate=functions.database.ref('/users/{user}').onCreate(function(a){var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'users',branches:[b],payload:{pointer:b}})}),exports.mutateRequest=functions.database.ref('/volunteer/hotline/immigration/{request}').onCreate(function(a){var b=a.data.key,c=a.data.val()}),exports.mutateRequest=functions.database.ref('/mutate/request/{request}').onCreate(function(a){var b=a.data.key,c=a.data.val();if(c.metadata.entity)switch(c.metadata.entity){case'user':_.map(c.payload,function(d,e){db.databaseWrite({config:{writeType:'update'},entity:'users',branches:[c.metadata.pointer,'identity',e],payload:d})});break;case'CommunityPersonAdd':db.databaseWrite({config:{writeType:'push'},entity:'community',branches:['people'],payload:c.payload});break;case'CommunityOrganizationAdd':db.databaseWrite({config:{writeType:'push'},entity:'community',branches:['organizations'],payload:c.payload});break;case'CommunityProjectAdd':db.databaseWrite({config:{writeType:'push'},entity:'community',branches:['projects'],payload:c.payload});break;case'volunteerHotline':if(c.metadata.hotlineDepartment){db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branches:['hotline',c.metadata.hotlineDepartment,'storage'],payload:_.omit(c.payload,'userRequesting')});var d=(0,_todayMatch2.default)(c.payload.days);if(d.length){var e=(0,_todayEpoch2.default)('America/Los_Angeles');if(c.payload.time.dateEnd>=e.dayendEpoch){db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branches:['hotline','immigration','today'],payload:c.payload});var f=moment(new Date,'America/Los_Angeles').get('hour');if(c.payload.time.hourStart<=f){var h=admin.database().ref('/volunteer/hotline/immigration/active');h.once('value').then(function(i){i.val();db.databaseWrite({config:{writeType:'push'},entity:'volunteer',branches:['hotline','immigration','active'],payload:c.payload})})}}}}}}),exports.twilioVoice=functions.https.onRequest(function(a,b){var c=new VoiceResponse,d=c.dial(),e=admin.database().ref('/volunteer/hotline/immigration/active');e.on('value').then(function(f){_.forEach(f,function(g){d.number(g.contact.contactPhone)})}),b.send(c.toString())}),exports.twilioVoiceInformation=functions.https.onRequest(function(a,b){var c=new VoiceResponse,d=c.dial();d.number('14155262486'),d.number('14153422598'),d.number('14156867259'),b.send(c.toString())}),exports.twilioSmsMonitorOutbound=functions.database.ref('/infrastructure/messages/outbound/request/{messages}').onCreate(function(a){var b=a.data.key,c=a.data.val();{var d=shortid.generate();c.metadata.uid=d,c.metadata.timestamp=new Date,db.databaseWrite({entity:'infrastructure',branches:['messages','outbound','request',b],payload:{uid:d},config:{writeType:'update'}}),db.databaseWrite({entity:'activity',branches:['sms'],payload:{smsRequest:c},config:{writeType:'push'}});var e=c.payload;(0,_twilio.twilioTextSend)(d,e)}}),exports.communityOrganizationOnCreate=functions.database.ref('/community/organizations/{organization}').onCreate(function(a){console.log(a);var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'community',branches:['organizations',b],payload:{pointer:b}})}),exports.communityProjectOnCreate=functions.database.ref('/community/projects/{person}').onCreate(function(a){var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'community',branches:['projects',b],payload:{pointer:b}})}),exports.communityPersonOnCreate=functions.database.ref('/community/people/{person}').onCreate(function(a){console.log(a);var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'community',branches:['people',b],payload:{pointer:b}})}),exports.communityOrganizationOnCreate=functions.database.ref('/community/organizations/{organization}').onCreate(function(a){console.log(a);var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'community',branches:['organizations',b],payload:{pointer:b}})}),exports.communityProjectOnCreate=functions.database.ref('/community/projects/{person}').onCreate(function(a){var b=a.data.key;db.databaseWrite({config:{writeType:'update'},entity:'community',branches:['projects',b],payload:{pointer:b}})});
//# sourceMappingURL=index.js.map