/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
import { Flex, Box, Grid, Text, Lead} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
 } from 'atomic'
import { ButtonLink } from 'fusion'


import Login from 'workshop/forms/authentication/AuthorizationLogin'

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >
      <BackgroundImage image={assets.images.marin} o={[0.5]} />
      <Flex direction={['column']}  mh={['50vh', '50vh', '70vh']}justify={['center']} >
        <Box w={1} color="white" >
          <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']} >Multicultural <Span fw={[700]} >Center of Marin</Span></Heading>
          <HorizontalRule bi='colorBase' bs={5} gradient='lime' w={[0.33333]} />
          <br/>
          <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>To make a great dream come true, the first requirement is a great capacity to dream; the second is persistence.</Paragraph>
        </Box> 

        <MediaQuery query='(min-width: 1224px)' component={Section}>
          <Container w={['1120px']} mt={[20, 15, 40]} >
            <Flex direction={['column', 'row']} justify={['center']} >
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={[1]}>Grow</Heading>
                <ButtonLink button={{gradient: 'cherry'}} link={{to:'/why'}} >Start Journey</ButtonLink>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Join in ongoing programs, events and classes.</Paragraph>
              </Box>
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={[1]}>Build</Heading>
                <ButtonLink button={{gradient: 'cherry', gradientDir: '-180deg' }} link={{to:'/products/multiple-pages'}} >Find Projects</ButtonLink>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Join in ongoing programs, events and classes.</Paragraph>
              </Box>
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={[1]}>Organize</Heading>
                <ButtonLink button={{gradient: 'cherry'}} link={{to:'/products/application'}} >Foster Connections</ButtonLink>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Join the Leadership Union to build stronger community.</Paragraph>
              </Box>
            </Flex>
          </Container>
        </MediaQuery>

        <Box>
          <Paragraph fontSize={[2,3]} fontWeight={[100]} ts={[0]} mt={[10,30, 60]} ><strong>Be The Change</strong> - Join The Community</Paragraph>
          <Login bg='transparent' f={[4]} > Create Account</Login>
        </Box>
      </Flex>

    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front