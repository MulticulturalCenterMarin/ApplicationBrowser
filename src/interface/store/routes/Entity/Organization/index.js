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
{/*--- Organization
    + Top (organizations) 
    - organizations/map => MapAdvancedCompose
    - organizations => MapAdvancedCompose
    - organizations => FirestoreList
    + Switch (organization)
      - organization/add => ProjectAddFull
      - organization => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/organizations/map" component={MapAdvancedCompose}
    delta='OrganizationSearch' 
    collection='organizations' 
    foundry='OrganizationMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/organizations" component={MapAdvancedCompose} 
    delta='OrganizationSearch' 
    collection='organizations' 
    foundry='OrganizationMarkerPopover'
    styledMap={{h:[200,280,360]}} 
  />
  <Route exact path="/dashboard/organizations" component={FirestoreList} 
    collection='organizations'
    delta='OrganizationSearch'
    entity='organization'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/organization/add" component={OrganizationAddFull} />
    <Route path="/dashboard/organization/:eid" component={FirestoreDocument}
      collection="organizations"
      foundry={'OrganizationProfileEntry'}
     />
  </Switch>
</div>