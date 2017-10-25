/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box, Flex, BackgroundImage, BackgroundGradient, Button, Container, Heading, Paragraph, Section } from 'atomic'
import { CommunityPrograms } from 'workshop/blocks'
import { WhyApproach } from 'workshop/sections'
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>

<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40]} pt={[20,40,80]} z={[15]} pos='relative' >
  <Container textAlign='center' w={[720]} >
    <Heading f={[5,6,7]} level={[2]} color={'green'} mt={[10, 20]} >What We're Doing About It</Heading>
    <Paragraph f={[2]} color={['charcoal']}>The Marin CultureCenter is grassroots, community organizing at its finest.<br/><strong>Real people are the answer to complex challenges.</strong></Paragraph>
  </Container>

  <Container w={[1,1, 1120]} mt={[20,40,80]} >
    <CommunityPrograms/>
  </Container>
</Section>
<Section {...props} bg="white" color={['charcoal']} pos="relative" z={[15]} pos='relative' >
  <Flex direction={['column', 'row']} align={['stretch']} justify={['center']} wrap={['wrap']} mh={['auto', 'auto', '760px']} >
    <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pl={[null,null, 80]} p={[20, 40, 0]} direction={['column']} justify={['center']} >
      <Heading level={[5]} f={[6,7]} color={'green'} mt={[0]} >Everything Is Connected</Heading>
      <Paragraph f={[]}>Aenean mollis ex euismod metus pharetra dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tincidunt pretium orci id congue. Duis ante mauris, feugiat vestibulum lacus ut, dignissim maximus lacus. Donec vulputate urna arcu, et imperdiet quam ultricies id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Health</Heading>
      <Paragraph f={[]}>Life, liberty and the pursuit of happiness. Granted to those who seek to unite and overcome today and tomorrow's growing challenges collectively. We have the power to solve challenges, both large and small, but first we have to unite communities, build relationships and create new models of self-empowerment.</Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Economics</Heading>
      <Paragraph f={[]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. Together, we can support and sustain the foundation required to solves real people challenges.</Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Social</Heading>
      <Paragraph f={[]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. Together, we can support and sustain the foundation required to solves real people challenges.</Paragraph>
    </Flex>
    <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} gradient='blueAlge'>
      <BackgroundImage image={assets.images.liberty} z={[0]} opacity={[0.75]} bs={['insetBottomHeavy']} />
      <BackgroundGradient gradientDir='-90deg' gradient='whiteTransparent'  />
    </Box>
  </Flex>

</Section>
  <WhyApproach/>
</div>)