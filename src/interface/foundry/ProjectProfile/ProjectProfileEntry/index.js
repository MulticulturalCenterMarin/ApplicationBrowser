/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import idx from './idx';
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
  FormStatusUpdate
} from 'foundry'
import {
  EntityProfileHero,
  EntityProfileGallery,
  FormProjectEdit,
  ProjectProfileInterfaceBiography,
  ProjectProfileInterfaceIdentity,
  ProjectProfileMenu,
  ProjectStatusUpdates,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} {...props}/>
        <Box p={[20,35]}>
          
          {/*--- Project ---*/}
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileGallery} {...props}/>

          {!idx(props.data, _ => _.biography) ? null :
          <Route exact path="/dashboard/:entity/:eid" component={ProjectProfileInterfaceBiography} {...props} w={1} />}

          {/*--- People::Project ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'people'}
              delta='ComposeTests'
              foundry='PersonCard'
              path="/dashboard/:entity/:eid/people" 
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Project ---*/}
          <Route exact path="/dashboard/:entity/:eid/activity" component={ProjectStatusUpdates} {...props} />
          
          {/*--- Edit::Project ---*/}
          {!props.data ? null : <Route path="/dashboard/:entity/:eid/edit" component={FormProjectEdit} {...props} /> }

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <ProjectProfileInterfaceIdentity {...props} w={1} />
        <ProjectProfileMenu {...props} />
        {/*--- Project ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="projects" 
          /> }
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="projects"
            delta="ProjectPeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}