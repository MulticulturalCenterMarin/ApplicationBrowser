/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Absolute } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromMain } from 'workshop/zones'
import { 
  EntityProfileMap,
  PeopleSearchAdvanced,
  OrganizationSearchAdvanced,
  ResourceSearch,
 } from 'foundry'
 import {
  SearchProjectAdvanced
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default () => 
<div>
  <Route exact path="/dashboard/people" component={PeopleSearchAdvanced} />
  <Route exact path="/dashboard/organizations" component={OrganizationSearchAdvanced} />
  <Route exact path="/dashboard/projects" component={SearchProjectAdvanced} />
  <Route exact path="/dashboard/tasks" component={PeopleSearchAdvanced} />
  <Route exact path="/dashboard/resources" component={ResourceSearch} />
</div>
