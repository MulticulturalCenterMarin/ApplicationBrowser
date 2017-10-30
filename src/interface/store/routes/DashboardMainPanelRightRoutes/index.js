/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  ArticleAdd,
  ArticleAddFullDescription,
  ArticleSearch,
  
  EventAdd,
  EventAddFullDescription,
  EventSearch,

  ProjectAdd,
  ProjectAddFullDescription,
  ProjectSearch,

  ResourceAdd,
  ResourceAddFullDescription,
  ResourceSearch,

  OrganizationAdd,
  OrganizationAddFullDescription,
  OrganizationSearch,

  PersonAdd,
  PersonAddFullDescription,
  PersonSearch,
} from 'entity'


/* ------------------------------- Component -------------------------------- */
export default () => 
<div>

  <Route 
    exact 
    path="/dashboard/communications/hotline"
    component={FirestoreFeed} 
    delta='HotlineAllSearch'
    collection='hotline' 
    foundry='DataCalendar'
    styledContainer={{
      gradient: 'cherry',
      w: 700
    }}
    styledCalendar={{
      bg:'white',
      p: 10,
      m:20
    }}
  />

  <Route 
    exact 
    path="/dashboard/communications/hotline/immigration"
    component={FirestoreFeed} 
    delta='HotlineCalendar'
    collection='hotline' 
    filters={{
      where: [
        ['hotline.hotlineSelection', '==', 'rapidResponse']
      ]
    }}
    foundry='DataCalendar'
    styledContainer={{
      gradient: 'cherry',
      w: 700
    }}
    styledCalendar={{
      bg:'white',
      p: 10,
      m:20
    }}
  />
  <Route 
    exact 
    path="/dashboard/communications/hotline/general"
    component={FirestoreFeed} 
    delta='HotlineGeneralSearch'
    collection='hotline' 
    filters={{
      where: [
        ['hotline.hotlineSelection', '==', 'generalInformation']
      ]
    }}
    foundry='DataCalendar'
    styledContainer={{
      gradient: 'cherry',
      w: 700
    }}
    styledCalendar={{
      bg:'white',
      p: 10,
      m:20
    }}
  />

   {/* Events */}
  <Route exact path="/dashboard/events/manage" component={EventSearch} />
  <Route exact path="/dashboard/events" component={EventAdd} />
  <Route exact path="/dashboard/events/add" component={EventAddFullDescription} />
   {/* News */}
  <Route exact path="/dashboard/news/manage" component={ArticleSearch} />
  <Route exact path="/dashboard/news" component={ArticleAdd} />
  <Route exact path="/dashboard/article/add" component={ArticleAddFullDescription} />
   {/* People */}
  <Route exact path="/dashboard/people/manage" component={PersonSearch} />
  <Route exact path="/dashboard/people" component={PersonAdd} />
  <Route exact path="/dashboard/person/add" component={PersonAddFullDescription} />
  {/*Projects | Multiple */}
  <Route exact path="/dashboard/projects/manage" component={ProjectSearch} />
  <Route exact path="/dashboard/projects" component={ProjectAdd} />
  <Route exact path="/dashboard/project/add" component={ProjectAddFullDescription} />

  {/*Resource */}
  <Route exact path="/dashboard/resources/manage" component={ResourceSearch} />
  <Route exact path="/dashboard/resources" component={ResourceAdd} />
  <Route exact path="/dashboard/resource/add" component={ResourceAddFullDescription} />
  {/*Organization */}
  <Route exact path="/dashboard/organizations/manage" component={OrganizationSearch} />
  <Route exact path="/dashboard/organizations" component={OrganizationAdd} />
  <Route exact path="/dashboard/organization/add" component={OrganizationAddFullDescription} />
</div>
