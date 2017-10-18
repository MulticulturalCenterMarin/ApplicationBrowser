/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
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
import LinkButtonOutline from 'molecules/LinkButtonOutline'

const MediaQuery = require('react-responsive');

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >
      <BackgroundImage image={assets.images.earth} z={0} o={[0.5]} />
      <Flex direction={['column']}  mh={['50vh', '70vh']}justify={['center']} >
        <Box w={1} color="white" >
          <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
            Ethereum <Span fw={[700]} >Projects &amp; Ideas</Span>
          </Heading>
          <HorizontalRule bi='colorBase' bs={5} gradient='lime' w={[0.33333]} />
          <br/>
          <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
            To make a great dream come true, the first requirement is a great capacity to dream; the second is persistence.
          </Paragraph>
        </Box> 

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