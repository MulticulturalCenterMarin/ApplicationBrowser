/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {
  Flex, Box,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section,
} from 'atomic'
import { ButtonLink } from 'fusion'

import MacbookDisplay from 'components/sentient/MacbookDisplay'
import Login from 'workshop/forms/authentication/AuthorizationLogin'

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} 
        px={[20,40]}
        pt={[20, 40]}
        pb={[120]}
        color='white'
        pos='relative'
      >
      <BackgroundImage image={assets.images.riceFields} o={[0.5]} />
      <Container>
        <Flex direction={['column', 'column', 'row']} align='center'  mh={['50vh', '50vh', '70vh']}>

          <Box w={[1,1,0.5]}>
            <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
              Grow The Future
            </Heading>
            <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
              To grow as a community we must first start with the foundtion. Preparing the earth, clearing the brush and organizing the seeds. Once complete, we can focus on building the future. 
            </Paragraph>
            <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
              Hence, why Grassroots organizing is the fundamental guiding principle. 
            </Paragraph>            
            <Paragraph fontSize={[2,3]} fontWeight={[100]} ts={[0]} mt={[10,30, 60]} ><strong>Be The Change</strong> - Join The Community</Paragraph>
            <Login gradient='cherry' f={[2]}>
              Create Account
            </Login>
          </Box>

          <Box w={[1,1,0.5]}>
            
            <Box w={[1,1, '170%']} >
              <MacbookDisplay>
                <Image src={assets.screen.entityProfile} />  
              </MacbookDisplay>
            </Box>
            <Box>

            </Box>
          </Box> 


        </Flex>
      </Container>

    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front