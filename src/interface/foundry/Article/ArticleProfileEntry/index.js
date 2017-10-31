/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { Flex, Box, Route, Markdown }from 'atomic'
import {
  FirestoreListCompose
} from 'containers'
import {
  ImageList,
  FormAddContributorPerson,
  FormStatusUpdate,
  EntityStatusUpdates,
  EntityTasks,
  MarkdownEditor,
  FormContentBasics,
  FormTaskAdd,
} from 'foundry'
import {
  FormArticleEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  ArticleProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  const contentBody = idx(props, _ => _.content.contentBody)

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
          
          {/*--- People::Article ---*/}
          {!contributorsRef ? null :
            <Route 
              exact 
              path='/dashboard/:entity/:eid/people'
              component={FirestoreListCompose}
              collection={'people'}
              entity='person'
              delta={`${props.id}|ComposePeople`}
              foundry='EntityCardDashboard'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Person ---*/}
          <Route 
            exact 
            path="/dashboard/article/:eid/activity" 
            component={EntityStatusUpdates}
            collection='articles'
          />
          
          {/*--- 
          
          Edit::Article 
          
          ---*/}
         {!props.id ? null : 
          <Route 
            exact 
            path="/dashboard/article/:eid/edit/settings"
            component={FormContentBasics}
            collection='articles'
            delta={props.id}
            />
          }

          {!props.content ? null : 
          <Route 
            exact 
            path="/dashboard/article/:eid/edit" 
            component={MarkdownEditor} 
            collection='articles' 
            delta={props.id}
            markdownDefault={idx(props, _ => _.content.contentBody)}
            />}


          {/*--- 
          
          Article Profile 
          
          ---*/}

          {!contentBody ? null :
          <Route
            exact
            path="/dashboard/:entity/:eid"
            component={Markdown}
            source={contentBody}
            bg='white'
            br={10}
            bs={2}
            mb={20}
            p={[20,30]}
          />}
          {!props ? null :
          <Route 
            exact 
            path="/dashboard/:entity/:eid"
            component={EntityProfileGallery} 
            collection='articles'
            images={props.images}
          />}


          {/*--- 
          
            Article Tasks 
          
          ---*/}

          <Route 
            exact 
            path="/dashboard/:entity/:eid/tasks"
            component={FormTaskAdd} 
            collection='articles'
            mb={[15,30]}
          />

          <Route 
            exact 
            path="/dashboard/article/:eid/tasks" 
            component={EntityTasks}
            collection='articles'
          />

      
        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <EntityProfileInterfaceIdentity
        name={props.name}
        contact={props.contact}
        images={props.images}
        w={1} />
        <ArticleProfileMenu {...props} />
        {/*--- Article ---*/}
        <Box p={[10]} >
          {!props.id ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="articles"
          /> }
          {!props.id ? null : 
          <Route path="/dashboard/:entity/:eid"
            component={FormAddContributorPerson}
            valueDefault={contributors} 
            collection="articles"
            delta="ArticlePeopleSearch"
          /> }
        </Box>
      </PerfectScrollbar>
    </Absolute>
  </div>
}