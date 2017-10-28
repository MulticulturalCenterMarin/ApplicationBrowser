/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  UserProfileDashboard,
  PrimeDataTable,
  DataTable,
  DataCalendar
 } from 'foundry'

import {
  ArticleAddFull,
  OrganizationAddFull,
  PersonAddFull,
  ProjectAddFull,
  ResourceAddFull,
} from 'entity'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>

  {/*--- *** Communications ***
    + Top (dashboard/communications) 
    - communications/map => MapAdvancedCompose
    + Switch (project)
      - communications/add => ProjectAddFull
      - communications => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/communications" component={FirestoreFeed} 
    delta='EventsCalendar'
    collection='events' 
    foundry='DataCalendar'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Route path="/dashboard/communications/hotline/:entity/calls/log" component={FirestoreTable} 
    delta='CallRecordSearch'
    collection='calls'
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


  <Route path="/dashboard/profile" component={UserProfileDashboard} />
  {/*--- Article
    + Top (news) 
    - news/map => MapAdvancedCompose
    - news => MapAdvancedCompose
    - news => FirestoreList
    + Switch (article)
      - article/add => ArticleAddFull
      - article => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/news" component={FirestoreList} 
    delta='ArticleSearch'
    entity='article'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/article/add" component={ArticleAddFull} />
    <Route path="/dashboard/article/:eid" component={FirestoreDocument}
      collection="articles"
      foundry={'ArticleProfileEntry'}
     />
  </Switch>
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
  <Route path="/dashboard/profile" component={UserProfileDashboard} />
  {/*--- Person
    + Top (people) 
    - people/map => MapAdvancedCompose
    - people => MapAdvancedCompose
    - people => FirestoreList
    + Switch (person)
      - person/add => PersonAddFull
      - person => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/people/map" component={MapAdvancedCompose}
  delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/people" component={MapAdvancedCompose} 
    delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[200,280,360]}} 
  />
  <Route exact path="/dashboard/people" component={FirestoreList} 
    collection='people'
    delta='PersonSearch'
    entity='person'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/person/add" component={PersonAddFull} />
    <Route path="/dashboard/person/:eid" component={FirestoreDocument}
      collection="people"
      foundry={'PersonProfileEntry'}
     />
  </Switch>


  {/*--- Project
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
    entity='project'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/project/add" component={ProjectAddFull} />
    <Route path="/dashboard/project/:eid" component={FirestoreDocument}
      collection="projects"
      foundry={'ProjectProfileEntry'}
     />
  </Switch>
 
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


</div>);
