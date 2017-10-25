/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import WhyPurposeGridItems from 'content/static/why/WhyPurposeGridItems'
import WhyGridItems from 'content/static/why/WhyGridItems'
import assets from 'assets'
import { Box, Flex, Grid, BackgroundImage, BackgroundGradient, Heading, Image, Paragraph, Container, Section, Span } from 'atomic'
import { HeaderActions, Card, GridCentered } from 'foundry'
import { CommunityPrograms } from 'workshop/blocks'

const BoxPerspective = styled(Flex)`
  perspective: 1120px;

  & > div:nth-of-type(2) {
    transform: rotateY(30deg);
  }
`
const BoxPerspectiveShift = styled(Flex)`
  perspective: 1120px;

  & > div:nth-of-type(2) {
    transform: rotateY(-30deg);
  }
`
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>
<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40, 80]} pt={[20,40,80]} bs={['insetBottomLight']} z={[15]} pos='relative' >
  <Container>
    <Container textAlign='center' w={[720]} >
      <Heading f={[5,6,7]} level={[2]} color={'blueLight'} mt={[10, 20]} >Culminating Diversity</Heading>
      <Paragraph f={[2]} color={['charcoal']}>The Marin CultureCenter is grassroots, community organizing at its finest.<br/><strong>Real people are the answer to complex challenges.</strong></Paragraph>
    </Container>
  <Flex my={[20, 40]} align={['center']} wrap={['wrap']}>
    <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2,2, 1]} px={[10, 20, 40]} >
      <Paragraph f={[3]} color='blue' fontWeight={[300]} ><strong>Relationships are the foundation of life.</strong> The Marin CultureCenter is on a steadfast mission to connect the diverse Marin Community, for sustained community well-being and happiness for everyone.</Paragraph>
      <Heading f={[3]} level={[2]} color={'indigo'} mt={[0]}>For The People. By The People.</Heading>
      <Paragraph f={[]}>Life, liberty and the pursuit of happiness. Granted to those who seek to unite and overcome today and tomorrow's growing challenges collectively. We have the power to solve challenges, both large and small, but first we have to unite communities, build relationships and create new models of self-empowerment.</Paragraph>
      <Heading f={[3]} level={[2]} color={'green'} mt={[0]}>A United Community - The Real Democracy</Heading>
      <Paragraph f={[]}>A tree is only as strong its roots. Grassroots organizing tills the soil, fertizlizes the dirt and irrigates the fields. Together, we can support and sustain the foundation required to solves real people challenges.</Paragraph>
    </Box>
    <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1,1, 2]} >
      <img src={assets.images.history}/>
    </Box>
  </Flex>
  </Container>
  </Section>
<Section bg={['orange']} gradient='lime' color={['white']} py={[20,40,220]} z={10} pos='relative'  >
<Container w={[1,1, 720]} px={[20, 10, 0]} >
  <Heading f={[6,7]} level={[5]}>Our Mission</Heading>
  <Paragraph f={[3]}>The Marin CultureCenter works with all Marin County residents, immigrants and low-income families in advancing their social, cultural, and economic well being through self-empowerment programs that encourage participation in the broader civic life of U.S. society.</Paragraph>
</Container>
</Section>

<Section color={['charcoal']} z={15} pos='relative' >
  <Container w={[1,1, 980]} mt={[0,0, -140]} z={15} pos='relative' >
  <Flex align={['left']} justify={['center']} direction={['column']}  bg={['blueDark']} color={['white']} h={[450]} px={[15,20,50]} w={[1]} pos='relative' bs={[0,1]}>
    <Box z={15} pos='relative' textAlign={['left']} >
  <Heading f={[]} level={[2]} ts={[0]} bg={['blue']} py={[10]} px={[20]} >Unite <Span fontWeight={[300]} >the People</Span>.</Heading>
    </Box>
    <BackgroundImage image={assets.images.merchant} z={1} o={[1]} />
  </Flex>
</Container>
<Container w={[1,1, 1120]} py={[20,40, 80]} >
  <Flex justify={['space-evenly']} wrap="wrap" >
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]} >
      <Heading f={[3]} color='orange' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']}  direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} level={[5]} color='amber'>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} level={[5]} color='green'>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} color='turquoise' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
  </Flex>

  <Flex justify={['space-evenly']} mt={[20,40]} wrap="wrap" display={['none', 'none', 'flex']} >
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]} >
      <Heading f={[3]} color='blueLight' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']}  direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} color='purple' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} color='cyan' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
      <Heading f={[3]} color='red' level={[5]}>Community Program</Heading>
      <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
  </Flex>
</Container>
</Section>
</div>)