/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
 } from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  pl:[10],
  bg:'white',
  bs:'2',
  p:[7.5]
}

export default (props) => {
  const { contact, name, time } = props
  return (
    <Flex direction={['row']} align='stretch' justify='center' p={[10]} w={[1, 1, 0.33333]} {...props} key={props.uid} >
      <Box {...mainLayout}>
        <Heading f={[4]} level={3} color='blue' fontWeight={[300]}>{name && name.nameFirst || null} {name && name.nameLast || null} </Heading>
        <HorizontalRule bc='blue' opacity={0.2}/>
        <Heading f={[3]} level={3} fontWeight={[300]}>Phone: {contact && contact.contactPhone || null}</Heading>
        <HorizontalRule bc='blue' opacity={0.2}/>
        <Heading f={[2]} level={4} fontWeight={[300]}>Date Start: {time && time.dateStart || null}</Heading>
        <Heading f={[2]} level={4} fontWeight={[300]}>Date End: {time && time.dateEnd || null}</Heading>
      </Box>
  </Flex>
  )
}