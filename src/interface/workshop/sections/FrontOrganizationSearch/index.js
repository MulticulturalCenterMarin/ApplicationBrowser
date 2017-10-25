/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument } from 'containers'
import assets from 'assets'
import { Flex, Box, BackgroundImage, BackgroundGradient, Container, Heading, Section} from 'atomic'
import {
  ProjectsSearchAdvanced,
} from 'entity'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section gradient='cherry' py={[20,60, 140]} pos='relative'>
    <BackgroundGradient gradient='green' o={0.35} />
    <BackgroundImage image={assets.images.church} o={[0.35]} />
    <Heading level={[3]} f={[5,6]} color='white' fw='300' ts={'lightHazy'} ta='center'>Community Resources</Heading>
    <Heading level={[3]} f={[3,4]} color='white' fw='300' ta='center' ts={'darkHazy'}>Want help find resources for social, economic and culture?</Heading>
    <Container my={[20,40]} >
      <Flex>
        <Box bg='white' br={5} bs={3} p={[10,20]} w={[1,0.2]}>
          <ProjectsSearchAdvanced/>
        </Box>
        <Box w={[1,0.8]} pl={[0,0, 30]} h={[300, 500]} of='hidden' >
          <PerfectScrollbar>
            <FirestoreList
              delta='ProjectSearch'
              foundry='ProjectCard'
              styled={{
                w: [1, 1, 0.33333333],
              }}
            />
          </PerfectScrollbar>
        </Box>
      </Flex>
    </Container>
  </Section>
)
