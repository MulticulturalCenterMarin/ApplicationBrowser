/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { 
  FrontIntroduction,
  FrontJourney,
  FrontPrograms,
  FrontProjectsActive,
  FrontProjectsSubmit,
  FrontOrganizationSearch,
  FrontResourcesSearch,
} from 'workshop/sections'
import { CommunityPrograms } from 'workshop/blocks'

import {
  FirestoreListCompose
} from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
  <Shape top left right h={[ '70px', '90px', "125px"]} mt={[-70, -90, -125]} svg={assets.svg.waves} />
  <Shape top left right h={[ '70px', '90px', "125px"]} svg={assets.svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
  <FrontProjectsActive/>

<MediaQuery query='(min-width: 1224px)' component={Section}>
   <FrontIntroduction/>
   <FrontOrganizationSearch/>
   <FrontJourney/>
   <FrontResourcesSearch/>
   <FrontPrograms/>

   <Section bg={['sand']} py={[20,40]} >
    <Container w={[1,1, 1120]} >
      <Flex my={[20, 40]} align={['stretch']}  wrap={['wrap']} >
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1]} pos="relative" >
          <BackgroundImage br={[5]} bs={[0]} src={assets.images.libertyHand}/>
        </Box>
        <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2]} py={[20,40, 60]} pl={[0,0,40]} >
          <Heading f={[4,5]} level={[3]} color={['blue']} fontWeight={[700]} >Liberty, Life and Pursuit of Happiness</Heading>
          <Heading f={[2,3]} level={[3]} color={['orange']} fontWeight={[700]} >Uniting Communties To Continue The Dream - The Sky Is The Limit </Heading>
          <Paragraph f={[]}>Praesent sodales sagittis molestie. Integer posuere purus vel eleifend eleifend. Morbi ut luctus nulla. Curabitur cursus nulla sem, vel porta ligula fermentum eget. In quis pellentesque lorem. Curabitur iaculis, nisl eget aliquam accumsan, ex velit accumsan purus, imperdiet mollis velit ex porta nisi. Nam vestibulum diam nisi, euismod viverra est pulvinar nec. </Paragraph>
        </Box>
      </Flex>
    </Container>
   </Section>
</MediaQuery>
   <Section bg={['orange']} gradient='cherry' color={['white']} py={[20,40,220]} >
    <Container w={[1,1, 720]} >
      <Heading f={[6,7]} level={[5]}>Our Mission</Heading>
      <Paragraph f={[3]}>The Marin CultureCenter works with all Marin County residents, immigrants and low-income families in advancing their social, cultural, and economic well being through self-empowerment programs that encourage participation in the broader civic life of U.S. society.</Paragraph>
    </Container>
   </Section>

   <Section color={['charcoal']}>
     <Container w={[1,1, 980]} mt={[0,0, -140]} >
      <Flex align={['left']} justify={['center']} direction={['column']}  bg={['blueDark']} color={['white']} h={[450]} px={[15,20,50]} w={[1]} pos='relative' bs={[0,1]}>
        <Box z={15} pos='relative' textAlign={['left']} >
        <Heading f={[]} level={[2]} ts={[0]} bg={['blue']} py={[10]} px={[20]} >Real Projects. <Span fontWeight={[300]} >Happening Today</Span>.</Heading>
        </Box>
        <BackgroundImage image={assets.images.justice} z={1} o={[1]} />
      </Flex>
    </Container>
    <Container w={[1,1, 1120]} py={[20,40, 80]} >
      <CommunityPrograms/>
    </Container>
   </Section>
</div>
)
