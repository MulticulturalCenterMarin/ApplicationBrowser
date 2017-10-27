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
  FormPersonEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  PersonProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} collection='people' data={props.data} />
        <Box p={[20,35]}>
          
          {/*--- People::Person ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'people'}
              delta='PersonsComposePeople'
              foundry='PersonCard'
              path='/dashboard/:entity/:eid/people'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Person ---*/}
          <Route exact path="/dashboard/person/:eid/activity" component={EntityStatusUpdates} collection='people' data={props.data}/>
          
          {/*--- Edit::Person ---*/}
          {!props.data ? null : <Route exact path="/dashboard/person/:eid/edit" component={FormPersonEdit} data={props.data} /> }

          {/*--- Person ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='people' data={props.data} />

          {!idx(props.data, _ => _.biography) ? null :
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileInterfaceBiography} data={props.data} w={1} />}

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <PersonProfileMenu {...props} />
        {/*--- Person ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="people" 
          /> }
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="people"
            delta="PersonPeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}