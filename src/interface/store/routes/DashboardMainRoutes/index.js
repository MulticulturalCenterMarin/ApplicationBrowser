/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument } from 'containers'
import {
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

import {
  MapAdvancedCompose,
 } from 'foundry'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  {/*--- 
    + Top (projects) 
    - projects/map => MapAdvancedCompose
    - projects => MapAdvancedCompose
    - projects => FirestoreList
    + Switch (project)
      - project/add => ProjectAddFull
      - project => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/projects/map" component={MapAdvancedCompose}
  delta='ProjectSearch' 
    collection='projects' 
    foundry='ProjectMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/projects" component={MapAdvancedCompose} 
    delta='ProjectSearch' 
    collection='projects' 
    foundry='ProjectMarkerPopover'
    styledMap={{h:[200,280,360]}} 
  />
  <Route exact path="/dashboard/projects" component={FirestoreList} 
    collection='projects'
    delta='ProjectSearch'
    foundry='ProjectCard'
    styled={{
      w: [1, 1, 0.3],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/project/add" component={ProjectAddFull} />
    <Route path="/dashboard/project/:eid" component={FirestoreDocument}
      collection="projects"
      foundry={'ProjectProfileEntry'}
     />
  </Switch>
 
  {/*--- Resource ---*/}
  <Route exact path="/dashboard/resources/map" component={MapAdvancedCompose}
    delta='ResourceSearch' 
    collection='resources' 
    foundry='ResourceMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/resources" component={MapAdvancedCompose} 
    delta='ResourceSearch' 
    collection='resources' 
    foundry='ResourceMarkerPopover'
    styledMap={{h:[200,280,360]}} 
  />
  <Route exact path="/dashboard/resources" component={FirestoreList} 
    collection='resources'
    delta='ResourceSearch'
    foundry='ResourceCard'
    styled={{
      w: [1, 1, 0.3],
    }}
  />
  <Switch>
    <Route path="/dashboard/resource/:eid" component={FirestoreDocument}
      collection="resources"
      foundry={'ResourceProfileEntry'}
     />
  </Switch>

  <Route path="/dashboard/upload" component={FormStorageUpload} />


  <Route path="/dashboard/profile" component={UserProfileDashboard} />

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
</div>);
