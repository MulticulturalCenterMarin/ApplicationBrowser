/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Fixed } from 'particles'
import { 
  Flex, Box,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import { ButtonLink } from 'fusion'


import Login from 'workshop/forms/authentication/AuthorizationLogin'
import { FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'

const Body = props => <Box w={[1,1,675]} bs={4} br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Organizations</Heading>
      <Paragraph f={[1]}>
        Easily find Organizations in the Marin County Community. Search by type, services, availability, etc...
      </Paragraph>
        </Box>
      </Flex>
</Box>



/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >

      <BackgroundGradient gradient='purpleBlue' o={0.85} gradientDir={'0deg'} />
      <BackgroundImage image={assets.images.marin} o={[0.135]} />

      <Absolute left top bottom >
        <Flex h={1} direction='column' justify='center' >
          <Box w={100} gradient='blue' br={'0 10px 10px 0'} bs={2}>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box py={30} >
                <SVG svg={assets.svg.campfire} svgColor='yellow' w={[30]} h={[30]} />
                <Heading level={[3]} f={[3]}>Community<br/>Programs</Heading>
              </Box>
            </DialogOpen>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box  py={30} >
                <SVG svg={assets.svg.cultureEagle} svgColor='greenLight' w={[30]} h={[30]} />
                <Heading level={[3]} f={[3]}>Youth<br/>Opportunity</Heading>
              </Box>
            </DialogOpen>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box py={30}>
                <SVG svg={assets.svg.government} svgColor='blueLight' w={[30]} h={[30]} />
                <Heading level={[3]} f={[3]}>Open<br/>Governance</Heading>
              </Box>
            </DialogOpen>
          </Box>
        </Flex>
      </Absolute>
      
      <Absolute right top bottom >
        <Flex h={1} direction='column' justify='center' >
          <Box w={100}>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box gradient='orange' py={30} br={'10px 0 0 10px'} bs={2} mt={10} >
                <Heading level={[3]} f={[3]}>$11,000+<br/>Raised</Heading>
                <Paragraph f={[1]}>
                  Rapid Response
                </Paragraph>
              </Box>
            </DialogOpen>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box gradient='purple' py={30} br={'10px 0 0 10px'} bs={2} mt={10}>
                <Heading level={[3]} f={[3]}>Submit Video</Heading>
                <Paragraph f={[1]}>
                  Join Brigade
                </Paragraph>
              </Box>
            </DialogOpen>
            <DialogOpen foundry='CommunityGrowDialog'>
              <Box gradient='turqoise' py={30} br={'10px 0 0 10px'} bs={2} mt={10}>
                <Heading level={[3]} f={[3]}>Answer Hotline</Heading>
                <Paragraph f={[1]}>
                  Learn How
                </Paragraph>
              </Box>
            </DialogOpen>
          </Box>
        </Flex>
      </Absolute>


      <Flex direction={['column']}  mh={['50vh', '50vh', '90vh']}justify={['center']}>

        <Box w={1} color="white">
          <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']} >Multicultural <Span fw={[700]} >Center of Marin</Span></Heading>
          <HorizontalRule bs={0} w={[0.33333]}/>
          <br/>
          <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
            To make a great dream come true, the first requirement is a<br/> great capacity to dream; the second is persistence.
          </Paragraph>
        </Box> 

        <MediaQuery query='(min-width: 1224px)' component={Section}>
          <Container w={['1120px']} mt={[20, 15, 40]} >
            <Flex direction={['column', 'row']} justify={['center']} >
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={['purpleDark']}>Connect</Heading>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Be A Part of Community</Paragraph>
                <Button gradient='cherry' py={[15]} px={[25]} mb={10} >
                  <Link to='/community/grow' >
                    Start Relationships
                  </Link>
                </Button>
                <DialogOpen foundry='CommunityGrowDialog'>
                 <Paragraph f={[1]}>
                   Introductory Information
                 </Paragraph>
                </DialogOpen>
              </Box>
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={['purpleDark']}>
                  Build
                </Heading>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Get Involved with Projects</Paragraph>
                <Button gradient='cherry'  gradientDir='-180deg' py={[15]} px={[25]} mb={10}>
                  <Link to='/community/build' >
                    Start Projects
                  </Link>
                </Button>
                <DialogOpen foundry='CommunityGrowDialog'>
                 <Paragraph f={[1]}>
                   Introductory Information
                 </Paragraph>
                </DialogOpen>
              </Box>
              <Box w={[1,1, 0.3333]} px={[15,35, 50]} >
                <Heading fontSize={[3,4,6]} fontWeight={[500]} level={4} mb={[5]} ts={['purpleDark']}>Organize</Heading>
                <Paragraph fontSize={[1]} fontWeight={[300]} level={5} mt={[10]}>Join the Leadership Union</Paragraph>
                <Button gradient='cherry' py={[15]} px={[25]} mb={10}>
                  <Link to='/community/organize' >
                    Foster Community
                  </Link>
                </Button>
                <DialogOpen foundry='CommunityGrowDialog'>
                 <Paragraph f={[1]}>
                   Introductory Information
                 </Paragraph>
                </DialogOpen>
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