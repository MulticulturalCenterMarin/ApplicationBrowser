/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument } from 'containers'
import assets from 'assets'
import { Flex, Box, BackgroundImage, BackgroundGradient, Container, Heading, Section} from 'atomic'
import {
  ProjectSearch,
} from 'entity'

/* ------------------------------- Component -------------------------------- */
export default props => (
  <Section gradient='cherry' py={[20,60, 140]} pos='relative'>
    <BackgroundGradient gradient='ibize' o={0.85} />
    <BackgroundImage image={assets.images.canal} o={[0.25]} />
    <Heading level={[3]} f={[5,6,8]} color='white' fw='300' ts={'lightHazy'} ta='center'>Find Active Projects</Heading>
    <Heading level={[3]} f={[2]} color='white' fw='300' ta='center' ts={'darkHazy'}>A Library of Curated Multicultural Center of Marin Projects</Heading>
    <Container my={[20,40]} >
      <Flex>
        <Box bg='white' br={5} bs={3} p={[10,20]} w={[1,0.2]}>
          <ProjectSearch/>
        </Box>
        <Box w={[1,0.8]} pl={[0,0, 30]} h={[300, 500]} of='hidden' >
          <PerfectScrollbar wheelPropagation={true} >
            <FirestoreList
              entity='project'
              delta='ProjectSearch'
              foundry='EntityCard'
              styled={{
                w: [1, 1, 0.5],
              }}
            />
          </PerfectScrollbar>
        </Box>
      </Flex>
    </Container>
  </Section>
)
