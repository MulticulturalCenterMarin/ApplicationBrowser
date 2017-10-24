/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import {
  EntityProfileMap,
  MapAdvancedCompose,
  OrganizationFirestoreDocument,
  OrganizationFirestoreList,
  OrganizationAddFull,
  OrganizationMap,
  OrganizationMapSlim,
  OrganizationSearchLocal,
  OrganizationProfileGraphRequest,
  OrganizationsMapMarkers,

  ResourceFirestoreDocument,
  ResourceFirestoreList,
  ResourceAdd,
  ResourceMap,
  ResourceMapSlim,
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

import {
  ProjectAddFull,
  ProjectFirestoreDocument,
  ProjectsFirestoreList,
  ProjectsMap,
  ProjectsMapSlim,
  ProjectMarkerPopover,
  FormProjectAddFull,
  FormProjectEdit,
  FormStorageUpload,
} from 'entity'

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
  <Switch>
    <Route exact path="/dashboard/project/add" component={ProjectAddFull} />
    <Route path="/dashboard/project/:eid" component={ProjectFirestoreDocument} />
  </Switch>
 
  {/*--- Resource ---*/}
  <Route exact path="/dashboard/resources/map" component={ResourceMap} />
  <Route exact path="/dashboard/resources" component={ResourceMapSlim} />
  <Route exact path="/dashboard/resources" component={ResourceFirestoreList} />
  <Switch>
    <Route exact path="/dashboard/resource/add" component={ResourceAdd} />
    <Route path="/dashboard/resource/:eid" component={ResourceFirestoreDocument} />
  </Switch>

  <Route path="/dashboard/upload" component={FormStorageUpload} />


  <Route path="/dashboard/profile" component={UserProfileDashboard} />
</div>);
