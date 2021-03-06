/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { Flex, Box, Route, Heading }from 'atomic'
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
  FormProjectEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  ProjectProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)
  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid"
            component={EntityProfileHero}
            images={props.images}
            name={props.name}
            metadata={props.metadata}
          />
        <Box p={[20,35]}>
          
          {/*--- People::Project ---*/}
          {!contributorsRef ? null :
            <Route 
              exact 
              path='/dashboard/:entity/:eid/people'
              component={FirestoreListCompose}
              collection={'people'}
              delta='ProjectsComposePeople'
              foundry='EntityCardDashboard'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Project ---*/}
          <Route exact path="/dashboard/project/:eid/activity" component={EntityStatusUpdates} collection='projects' data={props.data}/>
          
          {/*--- Edit::Project ---*/}
          {!props ? null : <Route exact path="/dashboard/project/:eid/settings" component={FormProjectEdit} data={props.data} /> }

          {/*--- Project ---*/}
          <Route exact path="/dashboard/:entity/:eid"
            component={EntityProfileGallery}
            images={props.images}
          />
          {/*--- Edit::Article ---*/}
          {!props ? null : 
          <Route exact path="/dashboard/:entity/:eid" component={MarkdownEditor} collection='projects' delta={props.id}  markdownDefault={idx(props, _ => _.content.contentBody)}/>}

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        {!props.content ? null : 
          <Route exact path="/dashboard/project/:eid/edit"
            component={FormContentBasics}
            collection='projects'
            content={props.content}
            />
          }
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <ProjectProfileMenu {...props} />
        {/*--- Project ---*/}
        <Box p={[10]} >
          {!contributorsRef ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="projects"
            delta="ProjectPeopleSearch"
          /> }
          {!props.name ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="projects" 
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}