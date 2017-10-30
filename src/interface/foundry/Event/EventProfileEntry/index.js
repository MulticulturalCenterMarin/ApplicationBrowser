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
  MarkdownEditor,
  FormContentBasics,
} from 'foundry'
import {
  FormEventEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  EventProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} collection='event' data={props.data} />
        <Box p={[20,35]}>
          
          {/*--- People::Event ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'events'}
              delta='EventsComposePeople'
              foundry='EntityCard'
              path='/dashboard/:entity/:eid/event'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Event ---*/}
          <Route exact path="/dashboard/event/:eid/activity" component={EntityStatusUpdates} collection='event' data={props.data}/>
          
          {/*--- Edit::Event ---*/}
          {!props.data ? null : 
          <Route exact path="/dashboard/event/:eid/edit" component={MarkdownEditor} collection='event' delta={props.id}  markdownDefault={idx(props, _ => _.content.contentBody)}/>}


          {/*--- Event ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='event' data={props.data} />



      
        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        {!props.data ? null : 
          <Route exact path="/dashboard/event/:eid/edit"
            component={FormContentBasics}
            collection='event'
            delta={props.id}
            data={props.data} 
            />
          }
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <EventProfileMenu {...props} />
        {/*--- Event ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="event" 
          /> }
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="event"
            delta="EventPeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}