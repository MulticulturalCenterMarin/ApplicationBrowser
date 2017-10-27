/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import BrowserDisplay from 'components/sentient/BrowserDisplay'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, List, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (<div>

<Section {...props} bg="sand" color={['charcoal']} pos="relative" pb={[20, 40]} py={[20,40,140]} z={[15]} pos='relative' >
  <Shape top left right h={[ '70px', '90px', "125px"]} mt={[-70, -90, -125]} svg={assets.svg.waves} />
  <Shape top left right h={[ '70px', '90px', "125px"]} svg={assets.svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
  <BackgroundGradient gradient='ibize' o={0.05} gradientDir='45deg' />
  <Container textAlign='center' w={[720]} >
    <Heading f={[5,6,7]} level={[2]} color={'indigo'} mt={[10, 20]}>Start With The Basics</Heading>
    <Paragraph f={[2]} color={['charcoal']}>The Marin CultureCenter is grassroots, community organizing at its finest.<br/><strong>Real people are the answer to complex challenges.</strong></Paragraph>
  </Container>

 <Container w={[1,1, 720]} mt={[20,40,80]} >
    <Paragraph f={[3]}>The Multicultural Center of Marin will help nourish human relationships.</Paragraph>

    <Paragraph f={[1]}>To grow as a community we must first start with the roots. Which means preparing the soil, clearing the brush and organizing the seeds. Hence, Grassroots organizing is the fundamental guiding principle. Together, we need to dream of what's possible, establish communication channels and begin organizing ourselves in a productive and efficient manner.</Paragraph>

    <Heading level={[3]} color='blue' f={[4,5]}>Embolden Dreamers</Heading>
    <Paragraph f={[1]}>It's a fact dreamers create our world. People who see what's possible and do. Humbly the Multicultural Center of Marin asks the dreamers, do-ers and builders of today to join our team. The ones at the heart of community problems. The ones who feel, act and participate in the challenges we face together.</Paragraph>

    <Paragraph f={[1]}><strong>The debate is over.</strong> It's time we unite, dream and get things done.</Paragraph>

    <Box w={[1,1, '150%']} ml={[null,null, '-25%']} py={[40,80]} >
      <BrowserDisplay>
          <Image src={assets.screen.dashboardResources} />
        </BrowserDisplay>
    </Box>

    <Heading level={[3]} color='blue' f={[4,5]}>Foster Complex Relationships</Heading>
    <Paragraph f={[1]}>Community opportunities are a reflection of people's relationships. More engaged relationships, equal more opportunity. Hence, it's easy to arise at the conclusion, we need more engaged relationships for a healthy, thriving community.</Paragraph>

    <List ordered>
      <Box is='li'>Informed political discussions regarding local governance.</Box>
      <Box is='li'>Economic opportunities sent directly to people via email, text or phone.</Box>
      <Box is='li'>Shared knowledgebase for engaged community activity.</Box>
    </List>

    <Paragraph f={[1]}>The Community Dashboard provides realtime mapping of community assets: organizations, projects, opportunities, task, public meetings, emergency alerts and more. It's the first step towards providing the diverse Marin community with instant access to important information now.</Paragraph>

    <Paragraph f={[2]}>Who, what, when, where and how are the first important questions we have to answer.</Paragraph>

    <Paragraph f={[1]}> Additionally, we have to make information "digestable" for all cultural, social, economic and political viewpoints. Which means ultimtaely means language translations, accessible design patterns, open information sharing and close attention to detail.</Paragraph>

    <List ordered>
      <Box is='li'>Need to find the right local health services? The Organizations/Resources search can help.</Box>
      <Box is='li'>Searching local community projects to get involved with? Checkout Project Dashboard.</Box>
      <Box is='li'>To empower the community to more collabartively recognize opportunity. </Box>
    </List>
    <Box w={[1,1, '150%']} ml={[null,null, '-25%']} py={[40,80]} >
      <BrowserDisplay>
          <Image src={assets.screen.entityProfile} />
        </BrowserDisplay>
    </Box>
    <Paragraph f={[1]}>Need to find the right local health services? The Organizations/Resources search can help.</Paragraph>

    <Paragraph f={[1]}>Searching local community projects to get involved with? Checkout Project Dashboard.</Paragraph>

    <Paragraph f={[1]}>To empower the community to more collabartively recognize opportunity. </Paragraph>
  </Container>

  <Shape bottom left right h={[ '70px', '90px', "125px"]}  svg={assets.svg.waves} />
  <Shape bottom left right h={[ '70px', '90px', "125px"]} mb={[-70, -90, -125]} svg={assets.svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
</Section>
<Section {...props} bg="white" color={['charcoal']} pos="relative" z={[5]} pos='relative' >
  <Flex direction={['column', 'row']} align={['stretch']} justify={['center']} wrap={['wrap']} >
    <Flex 
      flex={['1 1 100%', '1 1 100%', '1 1 40%']}
      pl={[null,null, 80]}
      p={[20, 40, 0]}
      py={[50,70,170]}
      direction={['column']} 
      justify={['center']} >
      <Heading level={[5]} f={[6,7]} color={'blue'} mt={[0]}>
        Everything Is Connected
      </Heading>
      <Paragraph f={[]}>
        The Multicultural Center of Marin is taking small steps towards providing an open platform for Grassroots Democracy. An important part of Democracy is participation. Whether it's partipating in public town halls, volunteering at community events or dreaming of a better tomorrow. However, it's possible to go one step further - Democratically Operated Projects.
      </Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>
        Culture
      </Heading>
      <Paragraph f={[]}>
        Image a world where community projects we're more thoroughly discussed, democratically voted upon, and given the space/time for citizens to participate in fully. A space to quickly get informed. Tools to better gauge citizen interest. More transparent financial accounting and accountability. The building blocks available to quickly get people informed, engaged and critically thinking.
      </Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>
        Economics
      </Heading>
      <Paragraph f={[]}>
        The Multicultural Center of Marin boldly hopes to help plant the seeds for social, cultural and political organizing via community owned infrastructure. The focus is diversity. Exploring all ideas, outcomes and solutions. The Multicultral Center of Marin knows wisdom is in the crowds. We just have to unlock it.
      </Paragraph>
      <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Social</Heading>
      <Paragraph f={[]}>
        Simply put, we're hoping to help plant the seeds for a platform to put "Doacracy" back in Democracy. An experiment of intertwining people and technology.
      </Paragraph>
    </Flex>
    <Box flex={['1 1 100%', '1 1 100%', '1 1 60%']} pos={['relative']} direction={['column']} justify={['center']} gradient='blueAlge' >
      <BackgroundImage image={assets.images.girlColor} opacity={[0.75]} bs={['insetBottomHeavy']} />
      <BackgroundGradient gradientDir='-90deg' gradient='whiteTransparent'  />
    </Box>
  </Flex>
<Shape bottom left right h={['140px']} mt={[]} w={1} svgColor='red' svg={assets.svg.curve} />
</Section>
<Section bg={['red']} color={['white']} py={[20,40,80]} z={10} pos='relative' of='hidden'  >
<Shape bottom left right h={['140px']} mt={[]} w={1} svgColor='red' svg={assets.svg.curve} />
  <Container w={[1,1,780]} >
    <Heading f={[6,7]} level={[5]} ts='lightHazy'>
      The Future Is Together
    </Heading>
    <Paragraph f={[3]} ts='lightHazy'>
      The Multicultural Center of Marin is planting the seeds for <strong>community</strong>.
    </Paragraph>
    <Paragraph f={[2]} ts='lightHazy'>
      Incorpating modern technology, with timeless tenets of Democracy. The Multicultural Center of Marin boldly hopes to help plant the seeds for social, cultural and political organizing via community owned infrastructure. The focus is diversity. Exploring all ideas, outcomes and solutions. The Multicultral Center of Marin knows wisdom is in the crowds. We just have to unlock it.
    </Paragraph>
  </Container>
<Shape left top right h={['140px']} mt={[]} w={1} svgColor='red' svg={assets.svg.curve}  transform={['rotate(180deg)']} />
</Section>
<Section bg={['orange']}
  gradient='greenLeaf'
  color={['white']}
  mh={'100vh'}
  pt={[20,40,420]}
  pb={[20,40,320]}
  z={10}
  pos='relative' 
  f='hidden'  >
  <Shape left top right h={['140px']} mt={[]} w={1} svgColor='red' svg={assets.svg.curve}  transform={['rotate(180deg)']} />
  <BackgroundGradient gradient='ibize' />
  <BackgroundImage image={assets.images.class} z={[0]} opacity={[0.75]} bs={['insetBottomHeavy']} />
  <Container w={[1,1, 720]} px={[20, 10, 0]} >
   
  </Container>
</Section>

<Section color={['charcoal']} z={15} pos='relative' >
  <Container w={[1,1, 980]} mt={[0,0, -140]} z={15} pos='relative' >
  <Flex
    align={['center']}
    justify={['center']}
    direction={['column']} 
    color={['white']}
    pos='relative'
    px={[20]}
    h={[200, 450]}
    w={[1]}
  >
    <BackgroundGradient gradient='ibize' />
    <BackgroundImage image={assets.images.desert} o={[0.5]} br={10} b={'2px solid #FFF'} bs={[0,1]} />
      <Container w={[0.6]} >
    <Box pos='relative' bg='white' p={[20,45]} >
      <BackgroundGradient gradient='ibize' />
        <Heading f={[6,7]} color="white" level={[5]}>People First</Heading>
        <Paragraph f={[2]}>
          The dream is big. The challenges will be difficult.<br/><strong>The reward is happy, healthy people.</strong>
        </Paragraph>
          <Heading f={[2,3,4]} level={[5]}>Our Approach</Heading>
        <Paragraph f={[2]}>The Multicultural Center of Marin works with all Marin County residents, immigrants and low-income families in advancing their social, cultural, and economic well being through self-empowerment programs that encourage participation in the broader civic life of U.S. society.</Paragraph>
    </Box>
      </Container>
  </Flex>
</Container>

</Section>
<Section bg="white" >
  <Container w={[600]} py={[20,40]} >
    


    <Flex my={[15,30]} >
      <Box p={10} >
        <SVG svg={assets.svg.chatDrawn} svgColor='indigo' w={[70]} h={[70]} />
      </Box>
      <Box>
        <Heading level={[3]} f={[3,4]} color='indigo' >
          Accountable Comments/Conversation
        </Heading>
        <Paragraph f={[1]}>
          Honest dialog requires transparency. Ideas are ultimately what matter, but we must provide an environment for accountability, respect and understanding. The Multicultural Center of Marin is firm on the belief real changes starts with real relationships.
        </Paragraph>
      </Box>
    </Flex>
    

    <Flex my={[15,30]} >
      <Box p={10} >
        <SVG svg={assets.svg.dataEncryption} svgColor='blue' w={[70]} h={[70]} />
      </Box>
      <Box>
        <Heading level={[3]} f={[3,4]} color='blue' >
          Annonymous Voting/Particpation
        </Heading>
        <Paragraph f={[1]}>
          Self empowerment begins with the confidence to make personal/family decisions in private. In contrast, with comments and conversations, voting and participation will be kept private, secure and confidental using secure peer-to-peer technology.
        </Paragraph>
      </Box>
    </Flex>
    
    <Flex my={[15,30]} >
      <Box p={10} >
        <SVG svg={assets.svg.dataMining} svgColor='indigo' w={[70]} h={[70]} />
      </Box>
      <Box>
        <Heading level={[3]} f={[3,4]} color='indigo' >
          Historical Decision Tracking
        </Heading>
        <Paragraph f={[1]}>
          Conversations require action to be valuable. Important conversations involved with community project decisions with be carefully cataloged, saved and searchable for later analysis. Performance tracking and long-term measuring of success is essential to long-term success of distributed autonomous organization.
        </Paragraph>
      </Box>
    </Flex>
    
    <Flex my={[15,30]} >
      <Box p={10} >
        <SVG svg={assets.svg.cultureEagle} svgColor='blue' w={[70]} h={[70]} />
      </Box>
      <Box>
        <Heading level={[3]} f={[3,4]} color='blue' >
          Multilanguage Comment/Conversation System
        </Heading>
        <Paragraph f={[1]}>
          Facilitating conversations enables thriving communities. Solutions flourish with diverse insights and perspectives. The Multicultural Center of Marin will help curate the best ideas and strategies from diverse cultures. Merging unique perspectives into valuable community projects
        </Paragraph>
      </Box>
    </Flex>

    <Flex my={[15,30]} >
      <Box p={10} >
        <SVG svg={assets.svg.flowChartShapes} svgColor='indigo' w={[70]} h={[70]} />
      </Box>
      <Box>
        <Heading level={[3]} f={[3,4]} color='indigo' >
          Community Discussion
        </Heading>
        <Paragraph f={[1]}>
         The first step to a succesful project is open, transparent and accountable conversation. The Multicultural Center of Marin provides the digital space for Marin county residents and community members to easily participate in important conversations surroing community projects.
        </Paragraph>
      </Box>
    </Flex>



  </Container> 

  <Container>

   <Flex align='center' direction={['column', 'column', 'row']} my={[20,35]} >
      <Box w={[1,1,0.5]} p={20} >
        <Heading f={[3,4,6]} color='indigo' level={[5]}>
          Organizing The World
        </Heading>
        <Paragraph f={[2]}>
          Incorpating modern technology, with timeless tenets of Democracy. The Multicultural Center of Marin boldly hopes to help plant the seeds for social, cultural and political organizing via community owned infrastructure. The focus is diversity. Exploring all ideas, outcomes and solutions.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.5]} p={20} >
         <BrowserDisplay>
            <Image src={assets.screen.dashboardResources} />
          </BrowserDisplay>
      </Box>
   </Flex>
   
   <Flex align='center' direction={['column', 'column', 'row']} my={[20,35]} >
      <Box w={[1,1,0.5]} p={20} order={[1,1,2]} >
        <Heading f={[3,4,6]} color='indigo' level={[5]}>
          Managed By The Community
        </Heading>
        <Paragraph f={[2]}>
          The dream is big. The challenges will be difficult. The reward is happy, healthy people. The mission is a multi-lingual conversation platform, able to help facilitate community connectivity. Ultimately enhancing the overal community well-being and happiness. Requiring activate participation by leaders, citizens and community members.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.5]} p={20} order={[2,2,1]} >
         <BrowserDisplay>
            <Image src={assets.screen.entityEdit} />
          </BrowserDisplay>
      </Box>
   </Flex>
   
   <Flex align='center' direction={['column', 'column', 'row']} my={[20,35]} >
      <Box w={[1,1,0.5]} p={20} >
        <Heading f={[3,4,6]} color='indigo' level={[5]}>
          Access Diverse Information
        </Heading>
        <Paragraph f={[2]}>
          Ultimately, this mission of the Multicultiral Center of Marin is to help scale Democracy at the grassroots organizing level: projects, resources, opportunities, relationships, events, partnerships, etc... We here to help facilitate existing organizations in their missions. To enhance the voices of existing leaders. Echoing the sentiments of people barely struggling to get by and can't participate. Help Democratically elected officials more quickly and efficiently connect with constituents.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.5]} p={20} >
         <BrowserDisplay>
            <Image src={assets.screen.siteInformation} />
          </BrowserDisplay>
      </Box>
   </Flex>
  </Container>

</Section>
</div>)