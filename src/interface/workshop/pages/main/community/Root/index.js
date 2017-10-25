/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import assets from 'assets'
import {Flex, Box, BackgroundImage, BackgroundGradient, Heading, Image, Paragraph, Section} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>

<Section {...props} bg="white" color={['charcoal']} pos="relative" z={[15]} pos='relative' >
  <Flex direction={['column', 'row']} align={['stretch']} justify={['center']} wrap={['wrap']} mh={['auto', 'auto', '760px']} >
    <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} gradient='greenLeaf' >
      <BackgroundImage image={assets.images.loveNeighbor} z={[0]} opacity={[0.75]} bs={['insetBottomHeavy']} />
      <BackgroundGradient gradientDir='90deg' gradient='whiteTransparent'  />
    </Box>
    <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pr={[null,null, 80]} p={[20, 40, 0]} direction={['column']} justify={['center']} >
      <Heading f={[4,5]} level={[2]} color='blue' >Opportunities To Overcome</Heading>
      <Heading f={[3]} level={[4]} color='orange' >Keeping The Big Picture In Focus</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Heading f={[3]} level={[4]} color='orange' >United Forces &amp; Ideas</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
    </Flex>
  </Flex>

</Section>
<Section {...props} bg="white" color={['charcoal']} pos="relative" z={[15]} pos='relative' >
  <Flex direction={['column', 'row']} align={['stretch']} justify={['center']} wrap={['wrap']} mh={['auto', 'auto', '760px']} >
    <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pl={[null,null, 80]} p={[20, 40, 0]} direction={['column']} justify={['center']} >
      <Heading f={[4,5]} level={[2]} color='blue' >Bringing Together Partners</Heading>
      <Heading f={[3]} level={[4]} color='orange' >Keeping The Big Picture In Focus</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Heading f={[3]} level={[4]} color='orange' >United Forces &amp; Ideas</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
    </Flex>
    <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} gradient='ibize' justify={['center']} >
      <BackgroundImage image={assets.images.team} z={[0]} opacity={[0.65]} bs={['insetBottomHeavy']} />
      <BackgroundGradient gradientDir='-90deg' gradient='whiteTransparent'  />
    </Box>
  </Flex>
</Section>
<Section {...props} bg="white" color={['charcoal']} pos="relative" z={[15]} pos='relative' >
  <Flex direction={['column', 'row']} align={['stretch']} justify={['center']} wrap={['wrap']} mh={['auto', 'auto', '760px']} >
    <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} gradient='blueAlge'>
      <BackgroundImage image={assets.images.boyClass} z={[0]} opacity={[0.75]} bs={['insetBottomHeavy']} />
      <BackgroundGradient gradientDir='90deg' gradient='whiteTransparent'  />
    </Box>
    <Flex flex={['1 1 100%', '1 1 100%', '1 1 40%']} pr={[null,null, 80]} p={[20, 40, 0]} direction={['column']} justify={['center']} >
      <Heading f={[4,5]} level={[2]} color='blue' >Everlasting Purpose</Heading>
      <Heading f={[3]} level={[4]} color='orange' >Keeping The Big Picture In Focus</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
      <Heading f={[3]} level={[4]} color='orange' >United Forces &amp; Ideas</Heading>
      <Paragraph f={[1]}>Ut nisi sapien, vestibulum et pellentesque at, iaculis sed neque. In vitae risus arcu. Cras fringilla, leo in dictum tristique, massa felis malesuada nunc, et iaculis dui libero sed quam. Sed in condimentum lorem, quis congue sem. Sed tristique fringilla varius. Aliquam et tortor varius diam lacinia sodales at at nulla.</Paragraph>
    </Flex>
  </Flex>

</Section>
</div>)