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
  FormArticleEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
  ArticleProfileMenu,
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} collection='articles' data={props.data} />
        <Box p={[20,35]}>
          
          {/*--- People::Article ---*/}
          {!contributorsRef ? null :
            <Route exact 
              component={FirestoreListCompose}
              collection={'articles'}
              delta='ArticlesComposePeople'
              foundry='PersonCard'
              path='/dashboard/:entity/:eid/article'
              references={contributorsRef} 
            />
          }
          {/*--- Activity::Article ---*/}
          <Route exact path="/dashboard/article/:eid/activity" component={EntityStatusUpdates} collection='articles' data={props.data}/>
          
          {/*--- Edit::Article ---*/}
          {!props.data ? null : 
          <Route exact path="/dashboard/article/:eid/edit" component={MarkdownEditor} collection='articles' delta={props.id}  markdownDefault={idx(props.data, _ => _.content.contentBody)}/>}


          {/*--- Article ---*/}
          <Route exact path="/dashboard/:entity/:eid"
          component={EntityProfileGallery} collection='articles' data={props.data} />



      
        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        {!props.data ? null : 
          <Route exact path="/dashboard/article/:eid/edit"
            component={FormContentBasics}
            collection='articles'
            delta={props.id}
            data={props.data} 
            />
          }
        <EntityProfileInterfaceIdentity {...props} w={1} />
        <ArticleProfileMenu {...props} />
        {/*--- Article ---*/}
        <Box p={[10]} >
          {!props.data ? null : 
          <Route path="/dashboard/:entity/:eid" 
            component={FormStatusUpdate} 
            collection="articles" 
          /> }
          {!props.data ? null : 
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