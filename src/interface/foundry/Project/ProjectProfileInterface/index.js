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
  ImageList,
  VideoEmbed,
} from 'foundry'
import {
  FormProjectEdit,
  FormProjectBanner,
  FormProjectBannerAdd,
  FormProjectGalleryAdd,
  FormProjectUpdate,
} from 'workshop/forms'
import {
  MenuProjectProfile
} from 'content/menus'

/* ------------------------------- Component -------------------------------- */
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuProjectProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>

export default props => { 
const imageBanner = idx(props.data, _ => _.images.imageBanner)
const name = idx(props.data, _ => _.name.nameProject)
const nameAlias = idx(props.data, _ => _.name.nameProjectAlias)

/*--- Components ---*/
const Video = () => !idx(props.data, _ => _.meta.metaVideoURL) ? null : <VideoEmbed url={idx(props.data, _ => _.meta.metaVideoURL)}/>
const ImageBanner = () => !idx(props.data, _ => _.images.imageBanner) ? null : <Box bs={3} mh={[200,260]} py={[40,80]} of='hidden' >
          <BackgroundGradient gradient='ibize' />
          <BackgroundImage src={idx(props.data, _ => _.images.imageBanner)} o={0.5}/>
            <Flex align='center' direction={['column']} justify='center' color='white' w={1} ta='center' >
                <Heading f={[6,7]} level={3} children={name|| null} />
                <Heading f={[3,4]} level={3} ml={[5]}>Alias: {nameAlias}</Heading>
              <Box z={10}><Video/></Box>
            </Flex>
        </Box>
const ImageGallery = () => !idx(props.data, _ => _.images.imageGallery) ? null : <ImageList data={idx(props.data, _ => _.images.imageGallery)}/>
return <div>
  <Absolute top right gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
    <ProjectProfileInterfaceIdentity {...props} w={1} />
    {!props.id ? null : <ProfileMenuMap {...props} />}
    {!props.data ? null : <Route exact path="/dashboard/:entity/:id" component={FormProjectGalleryAdd}/> }
  </Absolute>
  <Absolute top bottom left bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
      <PerfectScrollbar>
        {!ImageBanner ? null : <Route exact path="/dashboard/:entity/:id" component={ImageBanner}/> }
        {!ImageGallery ? null : <Route exact path="/dashboard/:entity/:id" component={ImageGallery}/> }
      <Box p={[20,35]}>
        {!props.data ? null : <Route path="/dashboard/:entity/:id/edit" component={FormProjectEdit}/> }
        {!props.data ? null : <Route path="/dashboard/:entity/:id/edit" component={FormProjectBannerAdd}/> }
        {!props.data ? null : <Route path="/dashboard/:entity/:id" component={FormProjectUpdate}/> }
        {!props.data ? null : <Route exact path="/dashboard/:entity/:id" component={()=><ProjectProfileInterfaceBiography {...props} w={1} />} />}
      </Box>
    </PerfectScrollbar>
  </Absolute>
</div>
}