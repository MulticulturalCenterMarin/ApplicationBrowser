/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
  br: 5,
  of:'hidden'
}

export default (props) => {
  console.log(props)
  /*--- Extraction ---*/
  const{ id, data } = props
  /*--- Extraction ---*/
  const name = idx(props.data, _ => _.name.nameProject)
  const nameAlias = idx(props.data, _ => _.name.nameProjectAlias)
  const phone = idx(props.data, _ => _.contact.contactPhone)
  const email = idx(props.data, _ => _.contact.contactEmail)
  const url = idx(props.data, _ => _.contact.contactURL)
  
  const imageBanner = idx(props.data, _ => _.images.imageBanner)
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
        <Box h={100,160}>
          <BackgroundImage src={imageBanner}/>
        </Box>
        }
        <Box p={[10]} >
          <Link to={`/dashboard/project/${id || null }`} color='blue' >
            <Heading f={[4,4,5]} level={3} color='blue' display='inline-block' children={name|| null} />
            <Heading f={[2]} level={3} color='charcoal' ml={[5]} display='inline-block'>Alias: {nameAlias}</Heading>
          </Link>
          { !email?null:<Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
          { !url?null:<Heading f={[3]} level={4} fw={[300]}><strong>URL</strong>{url}</Heading>}
        </Box>
      </Box>
    </Flex>
}