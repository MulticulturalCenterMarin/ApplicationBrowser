/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box, Flex, BackgroundImage, Button, Container, Heading, Paragraph } from 'atomic'
import { Card } from 'foundry'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex direction={['column', 'row']}
align={['center']}
color="white"
gradient='ibize'
justify={['center']}
wrap={['wrap']}
mh={['auto', 'auto', '760px']} mt={[20,40,80]} bs={['insetBottomLight']} pos='relative' >
  <Flex flex={['1 1 100%', '1 1 100%', '1 1 50%']} pl={[null,null, 80]} p={[20, 40, 0]} justify={['center']} >
    <Container ta="center" w={0.8} >
      <Heading f={[4,5,6]} level={[5]} ts={[1]} >Actively Monitoring<br/>The World</Heading>
      <Paragraph f={[2]} mt={[10,20]} >Aenean sed lacinia tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras risus dui, blandit nec est eu, condimentum ultricies enim.</Paragraph>
      <Button gradient='orangeSun' h={50} f={[3]} >Learn More</Button>
      <Button gradient='green' h={50} f={[3]} >Get Involved</Button>
    </Container>
  </Flex>
  <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} pos={['relative']} direction={['column']} justify={['center']} >
    <Box ml={[0,0, '15%']} w={[1,1, '70%']} z={[10]} pos={['relative']} textAlign="center" >

    </Box>
  </Box>
  <BackgroundImage image={assets.images.bayArea} z={[1]} bs={['insetTopHeavy']} pos='relative' o={[0.7]} />
</Flex>
)
