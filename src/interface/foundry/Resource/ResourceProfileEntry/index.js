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
  FormResourceEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  ResourceProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} collection='resources' data={props.data} />
        <Box p={[20,35]}>
          
          {/*--- People::Resource ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'resource'}
              delta='ResourcesComposePeople'
              foundry='PersonCard'
              path='/dashboard/:entity/:eid/resource'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Resource ---*/}
          <Route exact path="/dashboard/resource/:eid/activity" component={EntityStatusUpdates} collection='resources' data={props.data}/>
          
          {/*--- Edit::Resource ---*/}
          {!props.data ? null : <Route exact path="/dashboard/resource/:eid/edit" component={FormResourceEdit} data={props.data} /> }

          {/*--- Resource ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='resources' data={props.data} />

          {!idx(props.data, _ => _.biography) ? null :
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileInterfaceBiography} data={props.data} w={1} />}

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <ResourceProfileMenu {...props} />
        {/*--- Resource ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="resources" 
          /> }
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="resources"
            delta="ResourcePeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}