/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box, BackgroundImage, BackgroundGradient, Heading, Image, Paragraph, Container, Section, Span, SVG } from 'atomic'
import { CommunityPrograms } from 'workshop/blocks'
import { Actions, WhyApproach, ToolsDashboardFeatures, TechnologyBenefits } from 'workshop/sections'

/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>

<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40]} pt={[20,40,80]} z={[15]} pos='relative' >
<Container textAlign='center' w={[980]} >
  <Heading f={[5,6,7]} level={[2]} color={'green'} mt={[10, 20]} >Integrated Organizing</Heading>
  <Paragraph f={[2]} color={['charcoal']}>Get insights into community activity, opportunities and resources.</Paragraph>
</Container>

  <Container w={[1120]} mt={[20,40]} >
    <Flex my={[20, 40]} align={['center']} justify={['space-evenly']}>
      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.dataAnalytics} w={[50]} svgColor="blue"/>
        <Heading f={[3]} level={[2]} color={'blue'}>Community Information</Heading>
        <Paragraph f={[1]}>The MarinCultureCenter provides access to valuable community information</Paragraph>
      </Box>

      <Box flex={['1 1 0']}  order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.dataEncryption} w={[50]} svgColor="red"/>
        <Heading f={[3]} level={[2]} color={'red'}>Secure Systems</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. </Paragraph>
      </Box>

      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.dataMining} mt={[10,20]} w={[50]} svgColor="blue"/>
        <Heading f={[3]} level={[2]} color={'blue'}>Easy Coordination</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields.</Paragraph>
      </Box>

      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.flowChartComplex} w={[50]} svgColor="red"/>
        <Heading f={[3]} level={[2]} color={'red'}>Connected Services</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. </Paragraph>
      </Box>
    </Flex>
    <Flex align={['center']} justify={['space-evenly']}>
      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.guanine} w={[50]} svgColor="red"/>
        <Heading f={[3]} level={[2]} color={'red'}>Secure Systems</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. </Paragraph>
      </Box>
      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.idea} w={[50]} svgColor="blue"/>
        <Heading f={[3]} level={[2]} color={'blue'}>Community Information</Heading>
        <Paragraph f={[1]}>The MarinCultureCenter provides access to valuable community information</Paragraph>
      </Box>
      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.mobileMoney} w={[50]} svgColor="red"/>
        <Heading f={[3]} level={[2]} color={'red'}>Connected Services</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. </Paragraph>
      </Box>
      <Box flex={['1 1 0']} order={[2,2, 1]} px={[10, 20, 40]} >
        <SVG svg={assets.svg.holePuzzle} w={[50]} svgColor="blue"/>
        <Heading f={[3]} level={[2]} color={'blue'}>Easy Coordination</Heading>
        <Paragraph f={[1]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields.</Paragraph>
      </Box>
    </Flex>
  </Container>

<Container textAlign='center' w={[980]} mt={[20,40,80]} >
  <img src={assets.devices.MacbookPro}/>
</Container>

</Section>
  <ToolsDashboardFeatures/>
  <TechnologyBenefits/>
</div>)