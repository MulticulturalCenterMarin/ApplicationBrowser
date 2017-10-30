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
{/*--- *** Event ***
    + Top (events) 
    - events/map => MapAdvancedCompose
    - events => MapAdvancedCompose
    - events => FirestoreList
    + Switch (event)
      - event/add => ArticleAddFull
      - event => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/events" component={FirestoreFeed} 
    delta='EventSearch'
    collection='events'
    foundry='DataCalendar'
    styledContainer={{
      position: 'relative',
      h: [500],
    }}
  />
  <Route exact path="/dashboard/events" component={FirestoreList} 
    delta='EventSearch'
    entity='event'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/event/add" component={ArticleAddFull} />
    <Route path="/dashboard/event/:eid" component={FirestoreDocument}
      collection="events"
      foundry={'EventProfileEntry'}
     />
  </Switch>
</div>