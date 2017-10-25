/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'

import { Absolute, Flex, Box, Grid } from 'particles'
import { BackgroundImage, Heading, Image, Paragraph, Container, Section, Span} from 'atomic'
import { GridCentered } from 'foundry'
import { AuthorizationLogin } from 'workshop/forms'

import ActionsSimple from 'content/static/actions/ActionsSimple'
import WhyGridItems from 'content/static/why/WhyGridItems'
import WhyPurposeGridItems from 'content/static/why/WhyPurposeGridItems'
/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
<Section bg={['orange']} gradient='greenLeaf' color={['white']} py={[20,40,220]} z={10} pos='relative'  >
  <Container w={[1,1, 720]} px={[20, 10, 0]} >
    <Heading f={[6,7]} level={[5]}>Our Approach</Heading>
    <Paragraph f={[3]}>The Marin CultureCenter works with all Marin County residents, immigrants and low-income families in advancing their social, cultural, and economic well being through self-empowerment programs that encourage participation in the broader civic life of U.S. society.</Paragraph>
  </Container>
</Section>

<Section color={['charcoal']} z={15} pos='relative' >
  <Container w={[1,1, 980]} mt={[0,0, -140]} z={15} pos='relative' >
  <Flex align={['left']} justify={['center']} direction={['column']}  bg={['blueDark']} color={['white']} h={[450]} px={[15,20,50]} w={[1]} pos='relative' bs={[0,1]}>
    <BackgroundImage image={assets.images.organizersMeeting} z={1} o={[1]} />
  </Flex>
</Container>

</Section>
<Section bg="white" >
  <Container w={[720]} py={[20,40]} >
    <Heading f={[6,7]} color="red" level={[5]}>Organizing Community Leaders &amp; Members</Heading>
    <Paragraph f={[3]}>Aenean malesuada mi ac lacinia cursus. Cras vulputate lacus vel sapien pellentesque dapibus. Praesent at metus quam. Fusce ac quam venenatis, scelerisque tellus eget, placerat sem. Curabitur et diam eget augue convallis sollicitudin vitae quis erat. Integer a lorem varius massa pretium faucibus.</Paragraph>
    <Paragraph f={[2]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada mi ac lacinia cursus. Cras vulputate lacus vel sapien pellentesque dapibus. Praesent at metus quam. Fusce ac quam venenatis, scelerisque tellus eget, placerat sem. Curabitur et diam eget augue convallis sollicitudin vitae quis erat.</Paragraph>
    <Paragraph f={[2]}>Praesent at metus quam. Fusce ac quam venenatis, scelerisque tellus eget, placerat sem. Curabitur et diam eget augue convallis sollicitudin vitae quis erat.</Paragraph>
    <Paragraph f={[2]}>Cras condimentum ex sagittis justo hendrerit sodales. Aenean id augue sit amet orci pharetra venenatis. Pellentesque congue nisl ac purus vulputate, id vulputate libero tempus. Sed quis justo nec libero gravida lobortis. Integer vel neque nec sapien vestibulum posuere. Quisque ex arcu, ultrices ac dui vel, hendrerit auctor nisl. Vestibulum porttitor neque lacus, dictum tempor leo tempor ac. Nullam ornare egestas orci vel semper. Vivamus eleifend magna ligula, a mattis enim venenatis non. Aliquam aliquam, risus nec lobortis consequat, eros elit vestibulum sem, eu lacinia nisl turpis quis augue. In quis ex fermentum, varius sapien in, faucibus diam. Nunc euismod sodales malesuada. Nullam faucibus sagittis sagittis. Vivamus non neque tincidunt mauris efficitur mollis nec mollis tortor. Maecenas ullamcorper nulla quis finibus ultrices.</Paragraph>
  </Container> 
  <Box color="white">
  <GridCentered 
    items={WhyGridItems}
    itemsStyled={{ta: 'center',py:[50,125],}}
  />
  <GridCentered 
    items={WhyPurposeGridItems}
    itemsStyled={{ta: 'center',py:[50,125],}}
  />
  </Box>
</Section>
</div>)
