/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  ArticleAdd,
  ArticleAddFullDescription,
  ArticleSearch,

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
   {/* News */}
  <Route exact path="/dashboard/news/manage" component={ArticleSearch} />
  <Route exact path="/dashboard/news" component={ArticleAdd} />
  <Route exact path="/dashboard/article/add" component={ArticleAddFullDescription} />
   {/*Organization */}
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
