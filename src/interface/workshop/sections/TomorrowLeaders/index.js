/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Box, Flex, BackgroundImage,Button, Heading, Paragraph, Section} from 'atomic'
import { Card } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex direction={['column', 'row']} align={['center']} color="white" gradient='turqoiseMoss' justify={['center']} wrap={['wrap']} mh={['auto', 'auto', '760px']} bs={['insetBottomLight']} pos='relative' >
  <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pl={[null,null, 80]} p={[20, 40, 0]}  direction={['column']} justify={['center']} >
    <Heading f={[4,5]} level={[2]} color='white' ts={[0,1]} >Creating Real World Experiences</Heading>
    <Heading f={[3]} level={[4]} color='blueLight' >Uniting The Common Good Through Action</Heading>
    <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
  </Flex>
  <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} >
    <Box ml={[0,0, '15%']} w={[1,1, '70%']} z={[10]} pos={['relative']} >
      <Card
        title="Organizing Tomorrow's Leaders"
        description="Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam."
        image={assets.images.leadership} />
    </Box>
  </Box>
  <BackgroundImage image={assets.images.justice} z={[1]} bs={['insetTopHeavy']} pos='relative' o={[0.5]} />
</Flex>
)
