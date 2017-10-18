/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
} from 'atomic'
import {
  FormResourceAdd,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} w={[1,1, 350]}>
  <Heading level={[3]} f={[3]}>Add Resource</Heading>
  <FormResourceAdd bg='white' p={[10]} />
</Box>