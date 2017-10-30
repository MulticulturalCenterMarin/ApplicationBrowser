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

import RoutesEntityCommunications from '../Entity/Communications'
import RoutesEntityArticle from '../Entity/Article'
import RoutesEntityEvent from '../Entity/Event'
import RoutesEntityPerson from '../Entity/Person'
import RoutesEntityProject from '../Entity/Project'
import RoutesEntityOrganization from '../Entity/Organization'

/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  <RoutesEntityCommunications/>
  <RoutesEntityArticle/>
  <RoutesEntityEvent/>
  <RoutesEntityPerson />
  <RoutesEntityProject />
  <RoutesEntityOrganization />
  <Route path="/dashboard/profile" component={UserProfileDashboard} />
</div>);
