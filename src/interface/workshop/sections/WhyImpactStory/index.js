/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box, Flex, BackgroundImage,Button, Heading, Paragraph, Section} from 'atomic'
import { Card } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex direction={['column', 'row']}
align={['center']}
color="white"
gradient='turqoiseMoss'
justify={['center']}
wrap={['wrap']}
mh={['auto', 'auto', '760px']} mt={[20,40,80]} bs={['insetBottomLight']} pos='relative' >
  <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pl={[null,null, 80]} p={[20, 40, 0]} justify={['center']} >
    <Box ta="center">
      <Heading f={[5,6]} level={[5]}>The La Placita Story</Heading>
      <Button gradient='orangeSun' h={50} f={[3]} >Learn More</Button>
    </Box>
  </Flex>
  <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} >
    <Box ml={[0,0, '15%']} w={[1,1, '70%']} z={[10]} pos={['relative']} >
      <Card
        title="Supporting Merchants &amp; Local Business"
        description="Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam."
        image={assets.images.merchant} />
    </Box>
  </Box>
  <BackgroundImage image={assets.images.merchandise} z={[1]} bs={['insetTopHeavy']} pos='relative' o={[0.5]} />
</Flex>
)
