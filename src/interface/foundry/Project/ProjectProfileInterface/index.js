/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import idx from './idx';
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import {
  EntityProfileMap,
  LinkIconContext,
  ProjectProfileInterfaceBiography,
  ProjectProfileInterfaceIdentity,
  ProjectEditImages,
  ProjectStatusUpdates,
  ImageList,
  VideoEmbed,
} from 'foundry'
import {
  FormProjectEdit,
  FormProjectBanner,
  FormProjectBannerAdd,
  FormProjectGalleryAdd,
  FormProjectUpdate,
  FormProjectAddPerson,
  FormProjectAddContributorPerson,
  FormProjectAddContributorOrganization,
  FormProjectAddTaxonomy
} from 'workshop/forms'
import {
  MenuProjectProfile
} from 'content/menus'

/* ------------------------------- Component -------------------------------- */
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuProjectProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>
export default props => { 
  const name = idx(props.data, _ => _.name.nameProject)
  const nameAlias = idx(props.data, _ => _.name.nameProjectAlias)
  const biography = idx(props.data, _ => _.biography)
  const imageBanner = idx(props.data, _ => _.images.imageBanner)

  /*--- Components ---*/

  const Banner = () => <Box
      bs={3}
      color='white'
      mh={[200,260]} py={[40,80]} of='hidden' ta='center' >
      <BackgroundGradient gradient='ibize' />
      {!idx(props.data, _ => _.images.imageBanner) ? null : 
      <BackgroundImage src={idx(props.data, _ => _.images.imageBanner)} o={0.5}/>
      }
      <Flex align='center' direction={['column']} justify='center' color='white' w={1} ta='center' >
        <Heading f={[6,7]} level={3} children={name|| null}  ts={'darkPurple'} />
        <Heading f={[3]} level={4} ml={[5]} fw='300' >Alias: {nameAlias}</Heading>
        <Box z={10}>
          {!idx(props.data, _ => _.metadata.metaVideoURL) ? null : <VideoEmbed url={idx(props.data, _ => _.metadata.metaVideoURL)}/>}
        </Box>
      </Flex>
      <Absolute bottom right>
        <Box p={20} w={[1,1, 510]} >
          {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectBannerAdd}/> }
        </Box>
      </Absolute>
    </Box>

  const ImageGallery = () => !idx(props.data, _ => _.images.imageGallery) ? null : <ImageList data={idx(props.data, _ => _.images.imageGallery)}/>
    const ProjectStatusUpdatesLive = ()=><ProjectStatusUpdates {...props} />
  return <div>
    <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
        <PerfectScrollbar>
          <Route exact path="/dashboard/:entity/:id" component={Banner}/>
        <Box p={[20,35]}>
          {!ImageGallery ? null : <Flex>
            <Box w={[1,1,0.75]}>
              <Route exact path="/dashboard/:entity/:id" component={ImageGallery}/> 
            </Box>
            <Box w={[1,1,0.25]}>
              {!props.data ? null : <Route exact path="/dashboard/:entity/:id" component={FormProjectGalleryAdd}/> }
            </Box>
            </Flex>}

          {!biography ? null :
            <Route exact path="/dashboard/:entity/:id" component={()=><ProjectProfileInterfaceBiography {...props} w={1} />} />
          }

          {!ProjectStatusUpdatesLive ? null : <Route exact path="/dashboard/:entity/:id/activity" component={ProjectStatusUpdatesLive}/> }
          {!props.data ? null : <Route path="/dashboard/:entity/:id/edit" component={FormProjectEdit}/> }

        </Box>
      </PerfectScrollbar>
    </Absolute>
    <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
      <ProjectProfileInterfaceIdentity {...props} w={1} />
      {!props.id ? null : <ProfileMenuMap {...props} />}
      {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectUpdate}/> }
      {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectAddContributorPerson}/> }
      {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectAddContributorOrganization}/> }
      {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectAddTaxonomy}/> }
    </Absolute>
  </div>
}