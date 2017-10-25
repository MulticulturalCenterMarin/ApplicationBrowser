/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundImage, Button, Container, Image, Heading, Link, Paragraph, Section } from 'atomic'
import { ButtonLink } from 'fusion'
/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props}>
  <Box bg={['white']} py={[20,40]} >
    <Container textAlign={['center']} w={[1,1, 720]} >
      <Heading f={[5,6]} level={[3]} color={['blueLight']} fontWeight={[700]} >Join The Community</Heading>
      <Paragraph f={[]}>With your help, ex velit accumsan purus, imperdiet mollis velit ex porta nisi. Nam vestibulum diam nisi, euismod viverra est pulvinar nec. </Paragraph>
    </Container>
   </Box>
  <Flex justify={['space-evenly']} wrap="wrap" w={[1]}>
    <Flex align={['center']} justify={['space-evenly']} direction={['column']}  bg={['blue']} color={['white']} w={[1,1, 0.5]} pos='relative' px={[20,30]} py={[20,40]} >
      <Flex align={['stretch']} justify={['space-evenly']} direction={['column']}  h={[1]} >
        <Button f={[2]} gradient='cherry' ts={[0,1]}>Partner With MarinCultureCenter</Button>
        <Button f={[2]} gradient='blue' ts={[0,1]}>Start New Projects</Button>
        <Button f={[2]} gradient='purple' ts={[0,1]}>Help Build Infrastrucutre</Button>
      </Flex>
      <BackgroundImage image={assets.images.cmcm} z={-1} o={[0.6]} />
    </Flex>
    <Flex direction={['row']} wrap="wrap"  bg={['turquoise']} color={['white']} h={[350]} w={[1,1, 0.5]} pos='relative' px={[20,30]} py={[20,30]}>
      <Flex direction={['column']}  w={[1,0.5]} pos='relative' px={[20,30]}>
        <Heading f={[2]} level={[5]} ts={[0,1]}>The Mission</Heading>
        <Box>
          <ul>
            <li>Why</li>
            <li>Mission</li>
            <li>Team</li>
            <li>Governance</li>
            <li>Media</li>
            <li>Contat</li>
          </ul>
        </Box>
      </Flex>
      <Flex direction={['column']} h={[350]} w={[1,0.5]} pos='relative' px={[20,30]}>
        <Heading f={[2]} level={[5]} ts={[0,1]}>Resources</Heading>
        <Box>
          <ul>
            <li>Tools</li>
            <li>Articles</li>
            <li>Information</li>
          </ul>
        </Box>
      </Flex>

    </Flex>
  </Flex>
  <Flex wrap="wrap" >
      <Flex align="center" w={[1,1,0.5]} direction={['column', 'column', 'row']} justify="flex-start" py={[15]}  wrap='wrap' >
        <Link to="/about/why" color={['blueLight']}><Heading f={[]} level={[5]} display='inline' px={10}>Why</Heading></Link>
        <Link to="/about/mission" color={['blueLight']}><Heading f={[]} level={[5]} display='inline' px={10}>Mission</Heading></Link>
        <Link to="/community" color={['blueLight']}><Heading f={[]} level={[5]} display='inline' px={10}>Community</Heading></Link>
        <Link to="/memberships" color={['blueLight']}><Heading f={[]} level={[5]} display='inline' px={10}>Memberships</Heading></Link>
        <Link to="/opportunity" color={['blueLight']}><Heading f={[]} level={[5]} display='inline' px={10}>Opportunity</Heading></Link>
      </Flex>
      <Flex align="center" w={[1,1,0.5]} justify="center" color="white" py={[15]} >
        <Paragraph f={[]} mb={[0]} >Suspendisse mattis a sapien at hendrerit. Donec pellentesque finibus ligula nec posuere.</Paragraph>
      </Flex>
  </Flex>
</Section>
)