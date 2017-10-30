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
<Route 
    exact
    path="/dashboard/communications/hotline"
    component={FormHotlineAddPerson} 
    styled={{
      p:20
    }}
  />

  <Route 
    exact 
    path="/dashboard/communications/hotline/immigration"
    component={FirestoreList} 
    collection='hotline'
    delta='HotlineImmigrationSearch'
    filters={{
      where: [
        ['hotline.hotlineSelection', '==', 'rapidResponse']
      ]
    }}
    foundry='HotlineCard'
    styled={{
      mb: [20,30],
      w: [1],
    }}
  />
  
  <Route 
    exact 
    path="/dashboard/communications/hotline/general"
    component={FirestoreList} 
    collection='hotline'
    delta='HotlineGeneralSearch'
    filters={{
      where: [
        ['hotline.hotlineSelection', '==', 'generalInformation']
      ]
    }}
    foundry='HotlineCard'
    styled={{
      mb: [20,30],
      w: [1],
    }}
  />

  {/*--- *** Communications ***
    + Top (dashboard/communications) 
    - communications/map => MapAdvancedCompose
    + Switch (project)
      - communications/add => ProjectAddFull
      - communications => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/communications" component={FirestoreFeed} 
    delta='EventsCalendar'
    collection='hotline' 
    foundry='DataCalendar'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Route path="/dashboard/communications/hotlines/calls/log" component={FirestoreFeed} 
    delta='CallRecordSearch'
    collection='calls'
    foundry='DataTable'
    columns={[
      {
        field: 'status',
        header: 'Status',
      },
      {
        field: 'direction',
        header: 'Direction',
      },
      {
        field: 'duration',
        header: 'Duration',
      },
      {
        field: 'fromFormatted',
        header: 'From',
      },
      {
        field: 'to',
        header: 'To',
      },
    ]}
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Route path="/dashboard/communications/hotline/:entity/calls/log" component={FirestoreFeed} 
    delta='CallRecordSearch'
    collection='calls'
    foundry='DataTable'
    columns={[
      {
        field: 'status',
        header: 'Status',
      },
      {
        field: 'direction',
        header: 'Direction',
      },
      {
        field: 'duration',
        header: 'Duration',
      },
      {
        field: 'fromFormatted',
        header: 'From',
      },
      {
        field: 'to',
        header: 'To',
      },
    ]}
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Route exact path="/dashboard/communications/hotline/:entity/messages" component={FirestoreFeed} 
    delta='MessagesSearch'
    collection='messages'
    foundry='DataTable'
    filters={{
      where: [
        ['to', '==', '+14158791469']
      ]
    }}
    columns={[
      {
        field: 'status',
        header: 'Status',
      },
      {
        field: 'direction',
        header: 'Direction',
      },
      {
        field: 'body',
        header: 'Body',
      },
      {
        field: 'from',
        header: 'From',
      },
      {
        field: 'to',
        header: 'To',
      },
    ]}
  />
</div>