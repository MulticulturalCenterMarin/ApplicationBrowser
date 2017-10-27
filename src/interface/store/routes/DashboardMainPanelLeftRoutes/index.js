/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Absolute } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  ArticleSearch,
  ProjectSearch,
  PersonSearch,
  ResourceSearch,
  OrganizationSearch,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default () => 
<div>
  <Route exact path="/dashboard/news" component={ArticleSearch} />
  <Route exact path="/dashboard/people" component={PersonSearch} />
  <Route exact path="/dashboard/projects" component={ProjectSearch} />
  <Route exact path="/dashboard/organizations" component={OrganizationSearch} />
  <Route exact path="/dashboard/resources" component={ResourceSearch} />
</div>
