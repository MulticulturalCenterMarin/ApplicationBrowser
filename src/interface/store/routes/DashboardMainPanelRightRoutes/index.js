/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute } from 'particles'
import { fromMain } from 'workshop/zones'
import {
  FormPersonAdd,
  ResourceSearchAdvanced,
  SearchProjectAdvanced,
 } from 'foundry'

import {
  ProjectAddFullDescription,
  ProjectAdd,
  ResourceAdd,
  ResourceAddFullDescription,
} from 'entity'


/* ------------------------------- Component -------------------------------- */
export default () => 
<div>

  {/*Projects | Multiple */}
  <Route exact path="/dashboard/projects/manage" component={SearchProjectAdvanced} />
  <Route exact path="/dashboard/projects" component={ProjectAdd} />

  {/*Project | Single*/}
  <Route exact path="/dashboard/project/add" component={ProjectAddFullDescription} />

  {/*Resource */}
  <Route exact path="/dashboard/resources/manage" component={ResourceSearchAdvanced} />
  <Route exact path="/dashboard/resources" component={ResourceAdd} />
  <Route exact path="/dashboard/resource/add" component={ResourceAddFullDescription} />
</div>
