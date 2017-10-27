/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { Flex, Box, Route }from 'atomic'
import {
  FirestoreListCompose
} from 'containers'
import {
  ImageList,
  FormAddContributorPerson,
  FormStatusUpdate,
  EntityStatusUpdates,
} from 'foundry'
import {
  FormOrganizationEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  OrganizationProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} collection='organizations' data={props.data} />
        <Box p={[20,35]}>
          
          {/*--- People::Organization ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'organization'}
              delta='OrganizationsComposePeople'
              foundry='PersonCard'
              path='/dashboard/:entity/:eid/organization'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Organization ---*/}
          <Route exact path="/dashboard/organization/:eid/activity" component={EntityStatusUpdates} collection='organizations' data={props.data}/>
          
          {/*--- Edit::Organization ---*/}
          {!props.data ? null : <Route exact path="/dashboard/organization/:eid/edit" component={FormOrganizationEdit} data={props.data} /> }

          {/*--- Organization ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='organizations' data={props.data} />

          {!idx(props.data, _ => _.biography) ? null :
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileInterfaceBiography} data={props.data} w={1} />}

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <OrganizationProfileMenu {...props} />
        {/*--- Organization ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="organizations" 
          /> }
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="organizations"
            delta="OrganizationPeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}