/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { ButtonLink } from 'fusion'

import MacbookDisplay from 'components/sentient/MacbookDisplay'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
export default props => (
    <Section {...props} 
        px={[20,40]}
        pt={[40, 80, 120]}
        pb={[120]}
        color='white'
        pos='relative'
      >
      <BackgroundGradient gradient='cherry' o={1} gradientDir={'45deg'} />
      <Container>
        <Heading fontSize={[5,6,8]} level={3} fontWeight={[700]} mb={10} ts={['dark']} ta='center'>
          Rapid Response Network
        </Heading>
        <Heading fontSize={[4,5]} level={3} fontWeight={[300]} mb={10} ts={['dark']} ta='center'>
          Acting Upon Community Emergencies
        </Heading>
        <Flex 
          align='center'
          direction={['column', 'column', 'row']}
          mh={['50vh', '50vh', '70vh']}>
          mt={[30,70]}
          <Box w={[1,1,0.5]}>
            
            <Box w={[1,1, '170%']} ml={[null,null,'-70%']} >
              <MacbookDisplay>
                <Image src={assets.screen.dashboardResources} />
              </MacbookDisplay>
            </Box>
            <Box>

            </Box>
          </Box> 

          <Box w={[1,1,0.5]}>
            <Heading fontSize={[4,5]} level={3} fontWeight={[700]} mb={10} ts={['darkPurple']}>
              Help Monitor Community Safety
            </Heading>
            <HorizontalRule w={1} o={0.5}/>

            <Flex align='center' mt={20}>
                <SVG svg={assets.svg.familyTree} svgColor='white' w={[45]} h={[45]} />
              <Box pl={15} >
                <Paragraph fontSize={[1]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
                  Do you want to help keep the community safe? Are you available to answer calls in case of an emergency? Can you be a legal observer? 
              </Paragraph>       
              </Box>
            </Flex>
            <Flex align='center' mt={20}>
              <SVG svg={assets.svg.cultureEagle} svgColor='white' w={[45]} h={[45]} />
              <Box pl={15} >
                <Paragraph fontSize={[1]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
                  Participate in community self-reliance. Keep neighbors, friends and most important family safe from la migra.
                </Paragraph>            
              </Box>
            </Flex>

            <Flex align='center' mt={20}>
              <SVG svg={assets.svg.community} svgColor='white' w={[45]} h={[45]} />
              <Box pl={15} >
                <Paragraph fontSize={[1]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
                  Who, what, when, where and how are the first important questions we have to answer. Which means language translations, accessible design patterns, open information sharing and close attention to detail.
                </Paragraph>            
              </Box>
            </Flex>


          </Box>
          


        </Flex>
        
      </Container>

    </Section>
  )
