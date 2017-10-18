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
  ProjectProfileInterfaceIdentity
} from 'foundry'
import {
  FormProjectEdit,
  FormProjectBanner,
} from 'workshop/forms'
import {
  MenuProjectProfile
} from 'content/menus'

/* ------------------------------- Component -------------------------------- */
const ProfileMenuMap = props => <Box bg='white' bs={[1]} p={[10]} >{MenuProjectProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>

export default props => { 
const imageBanner = idx(props.data, _ => _.images.imageBanner)
return <div>
  <Absolute top left gradient='gray' pos={['relative !important', 'relative !important', 'absolute !important']} bs={[3]} h={[1]} w={[1,1, 0.23]} z={15}>
    <ProjectProfileInterfaceIdentity {...props} w={1} />
    {!props.id ? null : <ProfileMenuMap {...props} />}
  </Absolute>
  <Absolute top bottom right bg='white' pos={['relative !important', 'relative !important', 'absolute !important']} h={[1]} of='hidden' w={[1,1, 0.77]}>
      <PerfectScrollbar>
        <Box bs={3} h={[200,260]} of='hidden' >
          <BackgroundImage src={imageBanner}/>
        </Box>
      <Box p={[20,35]}>
        {!props.data ? null : <Route path="/dashboard/:entity/:id/edit" component={FormProjectBanner}/> }
        {!props.data ? null : <Route path="/dashboard/:entity/:id/edit" component={FormProjectEdit}/> }
        {!props.data ? null : <Route exact path="/dashboard/:entity/:id" component={()=><ProjectProfileInterfaceBiography {...props} w={1} />} />}
      </Box>
    </PerfectScrollbar>
  </Absolute>
</div>
}