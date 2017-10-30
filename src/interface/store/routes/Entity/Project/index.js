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
</div>