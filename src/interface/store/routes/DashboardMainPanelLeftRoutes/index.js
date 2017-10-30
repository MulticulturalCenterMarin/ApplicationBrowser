/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  ArticleSearch,
  EventSearch,
  ProjectSearch,
  PersonSearch,
  ResourceSearch,
  OrganizationSearch,
} from 'entity'
import {
  FormStatusUpdate,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default () => 
<div>
  <Route exact path="/dashboard/news" component={ArticleSearch} />
  <Route exact path="/dashboard/events" component={EventSearch} />
  <Route exact path="/dashboard/people" component={PersonSearch} />
  <Route exact path="/dashboard/projects" component={ProjectSearch} />
  <Route exact path="/dashboard/organizations" component={OrganizationSearch} />
  <Route exact path="/dashboard/resources" component={ResourceSearch} />
</div>
