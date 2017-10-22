/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import { Absolute } from 'particles'
import { 
  Flex, Box 
} from 'atomic'

import {
  GraphRequest
} from 'containers'

import {
  fromMain
} from 'workshop/zones'

import {
  FormProjectAddFull,
  FormProjectEdit,
  FormStorageUpload,
  ProfilePersonIdentityEdit,
  TwilioTextSend,
} from 'workshop/forms'
import {
  EntityProfileMap,
  HotlineActivity,
  HotlineActivityQuery,
  MapExample,
  MapSimple,
  MapAdvanced,
  MapAdvancedCompose,
  OrganizationFirestoreDocument,
  OrganizationFirestoreList,
  OrganizationAddFull,
  OrganizationMap,
  OrganizationMapSlim,
  OrganizationSearchLocal,
  OrganizationProfileGraphRequest,
  OrganizationsMapMarkers,

  ProjectFirestoreDocument,
  ProjectsFirestoreList,
  ProjectAddFull,
  ProjectsMap,
  ProjectsMapSlim,
  ProjectMarkerPopover,

  ResourceFirestoreDocument,
  ResourcesFirestoreList,
  ResourceAddFull,
  ResourcesMap,
  ResourcesMapSlim,
  ResourceMarkerPopover,

  PeopleFirestoreList,
  PeopleMap,
  PeopleMapSlim,
  PeopleMarkerPopover,
  PersonFirestoreDocument,
  PersonAddFull,

  UserProfile,
  UserProfileDashboard,
  UserProfileDashboardRequest,
  QueryUsers,
  QueryUsersInternal,
 } from 'foundry'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  <Route exact path="/dashboard/organizations/map" component={OrganizationMap} />
  <Route exact path="/dashboard/organizations" component={OrganizationMapSlim} />
  <Route exact path="/dashboard/organizations" component={OrganizationFirestoreList} />
  <Route path="/dashboard/organization/:eid" component={OrganizationFirestoreDocument} />

  {/*--- People ---*/}

  <Route exact path="/dashboard/people/map" component={PeopleMap} />
  <Route exact path="/dashboard/people" component={PeopleMapSlim} />
  <Route exact path="/dashboard/people" component={PeopleFirestoreList} />
  <Route exact path="/dashboard/person/add" component={PersonAddFull} />
  
  <Route path="/dashboard/person/:eid" component={PersonFirestoreDocument} />

  {/*--- Project ---*/}

  <Route exact path="/dashboard/projects/map" component={ProjectsMap} />
  <Route exact path="/dashboard/projects" component={ProjectsMapSlim} />
  <Route exact path="/dashboard/projects" component={ProjectsFirestoreList} />
  <Route exact path="/dashboard/project/add" component={ProjectAddFull} />
  
  <Route path="/dashboard/project/:eid" component={ProjectFirestoreDocument} />
 
  {/*--- Resource ---*/}
  <Route exact path="/dashboard/resources/map" component={ResourcesMap} />
  <Route exact path="/dashboard/resources" component={ResourcesMapSlim} />
  <Route exact path="/dashboard/resources" component={ResourcesFirestoreList} />
  <Route exact path="/dashboard/resource/add" component={ResourceAddFull} />
  
  <Route path="/dashboard/resource/e:id" component={ResourceFirestoreDocument} />


  <Route path="/dashboard/upload" component={FormStorageUpload} />

  <Route path="/dashboard/profile" component={UserProfileDashboard} />
  <Route path="/dashboard/volunteer/hotline/rapid-response" component={HotlineActivity} />
</div>);
