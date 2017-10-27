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
      <BackgroundGradient gradient='ibize' o={0.7} gradientDir={'45deg'} />
      <Container>
        <Heading fontSize={[5,6,8]} level={3} fontWeight={[700]} mb={10} ts={['darkPurple']} ta='center'>
          Community Dashboard
        </Heading>
        <Heading fontSize={[4,5]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']} ta='center'>
          A Chance To Connect with Community + Opportunity
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
              Access Relevant Information
            </Heading>
            <HorizontalRule w={1} o={0.5}/>

            <Flex align='center' mt={20}>
                <SVG svg={assets.svg.familyTree} svgColor='white' w={[45]} h={[45]} />
              <Box pl={15} >
                <Paragraph fontSize={[1]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
                More engaged relationships, equal more opportunity. Hence, it's easy to arise at the conclusion, we need more engaged relationships for a healthy, thriving community.
              </Paragraph>       
              </Box>
            </Flex>
            <Flex align='center' mt={20}>
              <SVG svg={assets.svg.cultureEagle} svgColor='white' w={[45]} h={[45]} />
              <Box pl={15} >
                <Paragraph fontSize={[1]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
                  The Community Dashboard provides realtime mapping of community assets: organizations, projects, opportunities, task, public meetings, emergency alerts and more.
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
