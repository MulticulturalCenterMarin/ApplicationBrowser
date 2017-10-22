/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import {
  FormProjectAdd,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} w={[1,1, 350]}>
  <FormProjectAdd 
    bg='white'
    p={[10]}
    styleWrapper={{
      bs:0,
      p:10
      }} 
    />
</Box>