import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  UserProfileDashboard,
  PrimeDataTable,
  DataTable,
  DataCalendar,
  FormAddContributorPerson,
  FormHotlineAddPerson,
 } from 'foundry'

import {
  ArticleAddFull,
  OrganizationAddFull,
  PersonAddFull,
  ProjectAddFull,
  ResourceAddFull,
} from 'entity'

export default props => 
<div>
{/*--- Resource
    + Top (resources) 
    - resources/map => MapAdvancedCompose
    - resources => MapAdvancedCompose
    - resources => FirestoreList
    + Switch (resource)
      - resource/add => ProjectAddFull
      - resource => FirestoreDocument
  ---*/}
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
    entity='resource'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/resource/add" component={ResourceAddFull} />
    <Route path="/dashboard/resource/:eid" component={FirestoreDocument}
      collection="resources"
      foundry={'ResourceProfileEntry'}
     />
  </Switch>
</div>