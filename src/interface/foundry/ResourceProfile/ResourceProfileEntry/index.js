/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import idx from './idx';
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { 
  Flex, Box, Route
}from 'atomic'
import {
  FormResourceEdit,
  FormResourceGalleryAdd,
  FormResourceUpdate,
  FormResourceAddContributorPerson,
  FormResourceAddContributorOrganization,
  FormResourceAddTaxonomy,
  ResourceProfileGallery,
  ResourceProfileInterfaceBiography,
  ResourceProfileInterfaceIdentity,
  ResourceProfileMenu,
  ResourceStatusUpdates,
  ImageList,
  ResourceProfileHero,
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
import {
  FirestoreListCompose
} from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => { 
  let contributors = idx(props.data, _ => _.contributors.contributorPeople), contributorsRef
  if(contributors) contributorsRef = contributors.map(i=> i.eid)

  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:eid" component={EntityProfileHero} data={props.data} />
        <Box p={[20,35]}>

            {/*--- Project ---*/}
            <Route exact path="/dashboard/:entity/:eid" component={EntityProfileGallery} data={props.data} />
        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <PerfectScrollbar>
        <ResourceProfileInterfaceIdentity {...props} w={1} />
        <ResourceProfileMenu {...props} />
        {/*--- Resource ---*/}
        <Box p={[10]} >
          {!props.data ? null : <Route path="/dashboard/:entity/:eid" component={FormResourceUpdate}/> }
          {!props.data ? null : <Route path="/dashboard/:entity/:eid" valueDefault={contributors} component={FormResourceAddContributorPerson}/> }
        </Box>
      </PerfectScrollbar>
    </Absolute>

  </div>
}